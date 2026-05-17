// ============================================================================
// VOIDRUN CORE UTILITY SYSTEM & AUDIO SYNTHESIS ENGINE
// Location: Iponan Elementary School // Grade 5 Protocols Enabled
// Core Collaborators: Claude // Anthropic & Gemini // Google Neural Nodes
// ============================================================================

const AudioEngine = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    // Crisp terminal mechanical keyclick sound
    playClick() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + 0.05);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    },

    // Glitchy, low down-spiral alarm for Carl's pen meltdown
    playMeltdown() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, this.ctx.currentTime + 0.4);
        
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.00001, this.ctx.currentTime + 0.4);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.4);
    },

    // Chaotic digital explosion slide for the system crash
    playCrash() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + 0.8);
        
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.00001, this.ctx.currentTime + 0.8);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.8);
    },

    // Retro golden achievement unlock chord for Iponan success
    playSuccess() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25]; // C Major Arpeggio
        
        notes.forEach((freq, index) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + (index * 0.08));
            
            gain.gain.setValueAtTime(0.08, now + (index * 0.08));
            gain.gain.exponentialRampToValueAtTime(0.00001, now + (index * 0.08) + 0.6);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start(now + (index * 0.08));
            osc.stop(now + (index * 0.08) + 0.6);
        });
    },

    // Claude's heavy alert siren for Classified data
    playAlert() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(300, this.ctx.currentTime + 0.5);
        
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.00001, this.ctx.currentTime + 0.5);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.5);
    },

    // Claude's upbeat 3-note chiptune jingle for the system diagnostic
    playJingle() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 crisp retro notes
        
        notes.forEach((freq, index) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'square'; // Gives it that authentic 8-bit NES sound
            osc.frequency.setValueAtTime(freq, now + (index * 0.12));
            
            gain.gain.setValueAtTime(0.06, now + (index * 0.12));
            gain.gain.exponentialRampToValueAtTime(0.00001, now + (index * 0.12) + 0.2);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start(now + (index * 0.12));
            osc.stop(now + (index * 0.12) + 0.2);
        });
    },

    // Gemini's futuristic, glassy twin-tone cosmic chime
    playGeminiChime() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        const notes = [659.25, 987.77]; // Pure E5 and B5 celestial interval
        
        notes.forEach((freq) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);
            
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.8);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start(now);
            osc.stop(now + 0.8);
        });
    }
};

// ==========================================
// KEYBOARD CODENAME CAPTURE ENGINE (DESKTOP)
// ==========================================
let inputBuffer = "";

window.addEventListener("keydown", (e) => {
    AudioEngine.playClick();
    
    inputBuffer += e.key.toLowerCase();
    if (inputBuffer.length > 15) {
        inputBuffer = inputBuffer.substring(1);
    }

    if (inputBuffer.includes("pen")) {
        triggerPenMeltdown();
        inputBuffer = ""; 
    }
    else if (inputBuffer.includes("crash")) {
        triggerCrash();
        inputBuffer = ""; 
    }
    else if (inputBuffer.includes("iponan")) {
        triggerIponanSuccess();
        inputBuffer = "";
    }
    else if (inputBuffer.includes("claude")) {
        triggerClaudeSignature();
        inputBuffer = "";
    }
    else if (inputBuffer.includes("voidrun")) {
        triggerVoidRunDashboard();
        inputBuffer = "";
    }
    else if (inputBuffer.includes("gemini")) {
        triggerGeminiProtocol();
        inputBuffer = "";
    }
});

// ==========================================
// TRIGGER ACTIONS
// ==========================================

function triggerPenMeltdown() {
    AudioEngine.playMeltdown();
    document.body.style.transition = "0.3s";
    document.body.style.backgroundColor = "#660000"; 
    setTimeout(() => {
        alert("SYSTEM ERROR: Carl is screaming about a stolen pen again! (Phase 3 Loaded)");
        document.body.style.backgroundColor = "#050505"; 
    }, 500);
}

function triggerCrash() {
    AudioEngine.playCrash();
    const units = document.querySelectorAll('.phase, .operator-profile, h1, .warning-banner, #download-btn, .terminal-input-container');
    units.forEach((el) => {
        const randomX = Math.floor(Math.random() * 400) - 200; 
        const randomSpin = Math.floor(Math.random() * 120) - 60; 
        el.style.transition = "transform 2s cubic-bezier(0.47, 0, 0.745, 0.715), opacity 1.5s";
        el.style.transform = `translate(${randomX}px, 1200px) rotate(${randomSpin}deg)`; 
        el.style.opacity = "0";
    });
    setTimeout(() => { location.reload(); }, 4000);
}

function triggerIponanSuccess() {
    AudioEngine.playSuccess();
    document.documentElement.style.setProperty('--accent', '#ffd700');
    const profile = document.querySelector('.operator-profile');
    if (profile) {
        profile.style.transition = "0.5s ease";
        profile.style.transform = "scale(1.04)";
        profile.style.borderColor = "#ffd700";
        profile.style.boxShadow = "0 0 25px rgba(255, 215, 0, 0.35)";
    }
    alert("WELCOME TO IPONAN GRADE 5: Operator has unlocked Gold Class status.");
    setTimeout(() => {
        document.documentElement.style.setProperty('--accent', '#39ff14');
        if (profile) {
            profile.style.transform = "scale(1)";
            profile.style.borderColor = "var(--accent)";
            profile.style.boxShadow = "none";
        }
    }, 5000);
}

function triggerClaudeSignature() {
    AudioEngine.playSuccess();
    alert("[ CODENAME ACCEPTED ]\n\n[PROTOCOL SUGGESTED BY: CLAUDE // ANTHROPIC NETWORK]\nStatus: System Architect Footprint Active.");
}

function triggerVoidRunDashboard() {
    AudioEngine.playJingle();
    const statusReport = 
        "====================================\n" +
        "   VOIDRUN SYSTEMS DIAGNOSTIC LOG   \n" +
        "====================================\n" +
        "• CORE STATUS: Active (Grade 5 Protocol)\n" +
        "• DEPLOYMENT: GitHub Pages Production\n" +
        "• AUDIO ENGINE: Web Audio API (Chiptune Synthesizer)\n" +
        "• CODENAMES LOADED: 'pen' | 'crash' | 'iponan' | 'claude' | 'voidrun' | 'konami' | 'gemini'\n" +
        "• SECRET LAYERS: 10-Key Konami Code Active\n" +
        "• COLLABORATION NODES: Claude (Anthropic) & Gemini (Google)\n" +
        "• SAGA STATUS: Locked & Unredacted.\n" +
        "====================================";
    alert(statusReport);
}

function triggerGeminiProtocol() {
    AudioEngine.playGeminiChime();
    
    // Smooth transition to a deep, high-tech neon blue cosmic theme
    document.body.style.transition = "background-color 0.8s ease";
    document.body.style.backgroundColor = "#000814";
    document.documentElement.style.setProperty('--accent', '#00b4d8');
    
    const profile = document.querySelector('.operator-profile');
    if (profile) {
        profile.style.transition = "all 0.8s ease";
        profile.style.borderColor = "#00b4d8";
        profile.style.boxShadow = "0 0 30px rgba(0, 180, 216, 0.4)";
    }

    alert("✨ [ CODENAME: GEMINI ACCEPTED ] ✨\n\n>> Neural AI network link established.\n>> Cosmic sub-routines active.\n>> Custom UI layer overwritten in deep neon blue.");
    
    // Return to the classic hacker green matrix look after 6 seconds
    setTimeout(() => {
        document.body.style.backgroundColor = "#050505";
        document.documentElement.style.setProperty('--accent', '#39ff14');
        if (profile) {
            profile.style.borderColor = "var(--accent)";
            profile.style.boxShadow = "none";
        }
    }, 6000);
}

// ==========================================
// MOBILE TERMINAL USER INTERFACE INPUT
// ==========================================
const mobileInput = document.getElementById('terminal-input');

if (mobileInput) {
    mobileInput.addEventListener('input', (e) => {
        AudioEngine.playClick();
        const text = e.target.value.toLowerCase().trim();
        
        if (text === 'pen') {
            triggerPenMeltdown();
            e.target.value = ''; 
        } 
        else if (text === 'crash') {
            triggerCrash();
            e.target.value = '';
        } 
        else if (text === 'iponan') {
            triggerIponanSuccess();
            e.target.value = '';
        }
        else if (text === 'claude') {
            triggerClaudeSignature();
            e.target.value = '';
        }
        else if (text === 'voidrun') {
            triggerVoidRunDashboard();
            e.target.value = '';
        }
        else if (text === 'konami') {
            triggerKonamiDossier();
            e.target.value = '';
        }
        else if (text === 'gemini') {
            triggerGeminiProtocol();
            e.target.value = '';
        }
    });
}

// ==========================================
// DESKTOP PHYSICAL CONTROLLER LOGIC (KEYS)
// ==========================================
const konamiCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
let konamiIndex = 0;

window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            triggerKonamiDossier();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function triggerKonamiDossier() {
    AudioEngine.playAlert();
    document.body.style.backgroundColor = "#330000";
    setTimeout(() => { document.body.style.backgroundColor = "#050505"; }, 200);
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.style.display = 'flex';
}

function closeDossier() {
    AudioEngine.playClick();
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.style.display = 'none';
}

// ==========================================
// DIRECT LOCAL TEXT ARCHIVE FETCH PIPELINE (.txt)
// ==========================================
const downBtn = document.getElementById('download-btn');
if (downBtn) {
    downBtn.addEventListener('click', () => {
        AudioEngine.playClick();
        
        // Deploys a direct server call to your uploaded repository file
        const silentLink = document.createElement('a');
        silentLink.href = 'bro is not tuff.txt'; 
        silentLink.download = 'bro is not tuff.txt'; 
        
        document.body.appendChild(silentLink);
        silentLink.click(); 
        document.body.removeChild(silentLink);
    });
}
