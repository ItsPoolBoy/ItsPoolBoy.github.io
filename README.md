# 🌊 ItsPoolBoy - Content Hub

A beautiful, interactive landing page where you can share notes, images, music, links, and more with background music playing while visitors scroll!

## ✨ Features

- 🎵 **Background Music Player** - Fixed player that plays while users scroll
- 📝 **Notes Section** - Share thoughts, ideas, and important information
- 🖼️ **Gallery** - Showcase your images
- 🎶 **Music Tracks** - Display and play music tracks
- 🔗 **Links** - Share useful bookmarks and resources
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🌙 **Dark Theme** - Modern dark aesthetic with gradient accents
- ⚡ **Smooth Animations** - Engaging scroll and hover effects

## 🚀 Getting Started

### Your website is live at:
**https://ItsPoolBoy.github.io** 🎉

### Customize Content

1. **Edit Notes:**
   - Open `index.html`
   - Find the `Notes Section` (look for `id="notes"`)
   - Add or modify note cards

2. **Add Images to Gallery:**
   - Upload images to your repository (create an `images/` folder)
   - Replace the image placeholders in the Gallery section
   ```html
   <div class="gallery-item">
       <img src="images/your-image.jpg" alt="Description">
       <p class="image-caption">Your caption</p>
   </div>
   ```

3. **Add Music Tracks:**
   - Upload MP3 files to your repository (create a `music/` folder)
   - Update the Music section with your tracks
   ```html
   <div class="track-item">
       <div class="track-icon">
           <i class="fas fa-music"></i>
       </div>
       <div class="track-info">
           <h4>Your Song Name</h4>
           <p>Artist Name</p>
       </div>
       <a href="music/your-song.mp3" class="play-link" title="Play">
           <i class="fas fa-play-circle"></i>
       </a>
   </div>
   ```

4. **Change Background Music:**
   - In `script.js`, find this line:
   ```javascript
   const defaultMusicURL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
   ```
   - Replace with your own music URL or local file path:
   ```javascript
   const defaultMusicURL = 'music/your-background-music.mp3';
   ```

5. **Add Links:**
   - Update the Links section in `index.html`
   ```html
   <a href="https://your-link.com" class="link-card">
       <i class="fas fa-link"></i>
       <h4>Link Title</h4>
       <p>Description of your link</p>
   </a>
   ```

## 📁 File Structure

```
ItsPoolBoy.github.io/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── images/             # (Create) Store your images here
└── music/              # (Create) Store your music here
```

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    --background: #0f172a;
    --surface: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
}
```

### Modify Layout
- Update `grid-template-columns` in CSS for different layouts
- Adjust padding/margins in `.section` class
- Change font sizes in media queries for mobile responsiveness

## 💡 Tips

1. **Use Relative Paths** for files in your repository:
   - Images: `images/photo.jpg`
   - Music: `music/song.mp3`

2. **External Music URLs**: Can use free services like:
   - Soundcloud
   - YouTube Music links
   - Spotify preview URLs
   - Archive.org audio collection

3. **Optimize Images**: Compress images before uploading to keep site fast

4. **SEO**: Update meta tags in `index.html` for better search visibility

## 📝 How to Add Content

### Step 1: Make Changes
Edit `index.html`, `styles.css`, or upload new files to your repo

### Step 2: Commit & Push
```bash
git add .
git commit -m "Update content"
git push
```

### Step 3: Visit Your Site
Wait 1-2 minutes, then refresh: `https://ItsPoolBoy.github.io`

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📞 Quick Help

- Check the comments in the HTML/CSS/JS files
- Review the demo content structure
- Test changes locally before pushing

---

**Happy sharing! 🚀**

Made with ❤️ for your content hub.
