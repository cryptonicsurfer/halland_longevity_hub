#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Set up dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = path.join(__dirname, 'public', 'images');

// Sample images to download (placeholders since most of the actual URLs in the file aren't directly available)
const imagesToDownload = [
  {
    name: 'halland-coastal-scenery.jpg',
    url: 'https://images.unsplash.com/photo-1486984008692-13438c5510c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
  },
  {
    name: 'kattegattleden-cycling.jpg',
    url: 'https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
  },
  {
    name: 'lilla-napoli.jpg',
    url: 'https://i0.wp.com/andershusa.com/wp-content/uploads/2017/03/lilla-napoli-authentic-neapolitan-italian-pizza-falkenberg-sweden-scandinavia-restaurant-review-food-foodie-eat-eating-dine-dining-best-tips-guide-travel-2019-27.jpg?ssl=1'
  },
  {
    name: 'swerl-coffee-club.jpg',
    url: 'https://sprudge.com/wp-content/uploads/2021/10/Swerl-Coffee-Club-4-1197x800.jpg'
  },
  {
    name: 'nordic-farm-to-table.jpg',
    url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'preventative-health-center.jpg',
    url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'blue-zone-living.jpg',
    url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'traditional-nordic-food.jpg',
    url: 'https://images.unsplash.com/photo-1611072172377-0cabc3addb30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'halland-countryside.jpg',
    url: 'https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

// Make sure output directory exists
if (!fs.existsSync(outputDir)) {
  console.log(`Creating directory: ${outputDir}`);
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(outputDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode} ${response.statusMessage}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve(filepath);
      });

      file.on('error', err => {
        fs.unlink(filepath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Main function to download all images
async function downloadAllImages() {
  console.log(`Downloading ${imagesToDownload.length} images to ${outputDir}...`);
  
  const promises = imagesToDownload.map(image => 
    downloadImage(image.url, image.name)
      .catch(err => {
        console.error(`❌ Error downloading ${image.name}: ${err.message}`);
        return null;
      })
  );

  try {
    const results = await Promise.all(promises);
    const successCount = results.filter(result => result !== null).length;
    console.log(`\nDownload complete! Successfully downloaded ${successCount}/${imagesToDownload.length} images.`);
  } catch (error) {
    console.error('An error occurred during download:', error);
  }
}

// Run the download
downloadAllImages();
