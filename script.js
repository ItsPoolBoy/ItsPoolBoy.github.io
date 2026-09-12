// Music Player Functionality
let isPlaying = false;
let audioElement = new Audio();

// Sample background music (you can replace with your own)
const defaultMusicURL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

// Initialize audio element
audioElement.src = defaultMusicURL;
audioElement.loop = true;
audioElement.volume = 0.5;

const playBtn = document.getElementById('play-btn');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

// Play/Pause button
playBtn.addEventListener('click', togglePlay);

function togglePlay() {
    if (isPlaying) {
        audioElement.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    } else {
        audioElement.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    }
}

// Volume control
volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value;
    audioElement.volume = volume / 100;
    volumeValue.textContent = volume + '%';
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    if (audioElement.duration) {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        document.getElementById('progress').style.width = progress + '%';
    }
});

// Click on progress bar to seek
document.querySelector('.progress-bar').addEventListener('click', (e) => {
    const progressBar = document.querySelector('.progress-bar');
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioElement.currentTime = percent * audioElement.duration;
});

// Update song info
function updateSongInfo() {
    // You can customize this with actual song data
    songTitle.textContent = 'Background Music';
    songArtist.textContent = isPlaying ? 'Now playing...' : 'Click to play';
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Gallery image hover effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Initialize
updateSongInfo();

// Optional: Auto-play music when page loads (browsers may block this)
// Uncomment the line below if you want auto-play (requires user interaction first)
// audioElement.play();

console.log('🎵 Music player initialized!');
console.log('💡 Tip: To add your own music, replace the defaultMusicURL in script.js');
console.log('🎨 To customize content, edit the HTML sections in index.html');
