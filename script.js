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
        const notes = [523.25, 659.25, 783.99]; 
        
        notes.forEach((freq, index) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'square'; 
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
        const notes = [659.25, 987.77]; 
        
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
    },

    // Fast high-pitch warning glitch for expose command
    playExposeGlitch() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        for (let i = 0; i < 4; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(1500 - (i * 200), now + (i * 0.05));
            gain.gain.setValueAtTime(0.08, now + (i * 0.05));
            gain.gain.exponentialRampToValueAtTime(0.00001, now + (i * 0.05) + 0.1);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + (i * 0.05));
            osc.stop(now + (i * 0.05) + 0.1);
        }
    },

    // Matrix digital rainfall sweep sound
    playMatrixSweep() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(100, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(2000, this.ctx.currentTime + 1);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.00001, this.ctx.currentTime + 1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 1);
    },

    // Sarcastic retro chiptune fail tone
    playFailTone() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        const freqs = [300, 260, 220, 180];
        freqs.forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, now + (i * 0.15));
            gain.gain.setValueAtTime(0.1, now + (i * 0.15));
            gain.gain.linearRampToValueAtTime(0.00001, now + (i * 0.15) + 0.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + (i * 0.15));
            osc.stop(now + (i * 0.15) + 0.2);
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
    else if (inputBuffer.includes("expose")) {
        triggerExposeProtocol();
        inputBuffer = "";
    }
    else if (inputBuffer.includes("matrix")) {
        triggerMatrixProtocol();
        inputBuffer = "";
    }
    else if (inputBuffer.includes("tuff")) {
        triggerTuffProtocol();
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
        "• CODENAMES LOADED: 'pen' | 'crash' | 'iponan' | 'claude' | 'voidrun' | 'konami' | 'gemini' | 'expose' | 'matrix' | 'tuff'\n" +
        "• SECRET LAYERS: 10-Key Konami Code Active\n" +
        "• COLLABORATION NODES: Claude (Anthropic) & Gemini (Google)\n" +
        "• SAGA STATUS: Locked & Unredacted.\n" +
        "====================================";
    alert(statusReport);
}

function triggerGeminiProtocol() {
    AudioEngine.playGeminiChime();
    document.body.style.transition = "background-color 0.8s ease";
    document.body.style.backgroundColor = "#000814";
    document.documentElement.style.setProperty('--accent', '#00b4d8');
    
    const profile = document.querySelector('.operator-profile');
    if (profile) {
        profile.style.transition = "all 0.8s ease";
        profile.style.borderColor = "#00b4d8";
        profile.style.boxShadow = "0 0 30px rgba(0, 180, 216, 0.4)";
    }
    alert("✨ [ CODENAME: GEMINI ACCEPTED ] ✨\n\n>> Neural AI network link established.\n>> Custom UI layer overwritten in deep neon blue.");
    setTimeout(() => {
        document.body.style.backgroundColor = "#050505";
        document.documentElement.style.setProperty('--accent', '#39ff14');
        if (profile) { profile.style.borderColor = "var(--accent)"; profile.style.boxShadow = "none"; }
    }, 6000);
}

// NEW EASTER EGG 1: Expose Video Warning Alert
function triggerExposeProtocol() {
    AudioEngine.playExposeGlitch();
    document.body.style.transition = "background-color 0.2s";
    document.body.style.backgroundColor = "#3a3000";
    document.documentElement.style.setProperty('--accent', '#ffea00');
    setTimeout(() => {
        alert("⚠️ [ CRITICAL WARNING DELIVERED ] ⚠️\n\n>> 'Just wait... because I’m making an exposed video in the future.'\n>> Future compilation layout countdown initialized.");
        document.body.style.backgroundColor = "#050505";
        document.documentElement.style.setProperty('--accent', '#39ff14');
    }, 300);
}

// NEW EASTER EGG 2: Matrix Code Grid Takeover
function triggerMatrixProtocol() {
    AudioEngine.playMatrixSweep();
    document.documentElement.style.setProperty('--accent', '#00ff00');
    document.body.style.backgroundColor = "#001a00";
    alert("⚡ [ MATRIX OVERRIDE SEQUENCE ] ⚡\n\nYou are inside the mainframe. Carl's leverage has been fully deleted from the central directory.");
    setTimeout(() => {
        document.body.style.backgroundColor = "#050505";
        document.documentElement.style.setProperty('--accent', '#39ff14');
    }, 4000);
}

// NEW EASTER EGG 3: Sarcastic Sagas Fail Protocol
function triggerTuffProtocol() {
    AudioEngine.playFailTone();
    alert("❌ [ EVALUATION COMPLETE ] ❌\n\nResult: Bro is confirmed NOT tuff.\n Meltdown over a pen has critically compromised the subject's posture matrix.");
}

// ==========================================
// MOBILE TERMINAL USER INTERFACE INPUT
// ==========================================
const mobileInput = document.getElementById('terminal-input');

if (mobileInput) {
    mobileInput.addEventListener('input', (e) => {
        AudioEngine.playClick();
        const text = e.target.value.toLowerCase().trim();
        
        if (text === 'pen') { triggerPenMeltdown(); e.target.value = ''; } 
        else if (text === 'crash') { triggerCrash(); e.target.value = ''; } 
        else if (text === 'iponan') { triggerIponanSuccess(); e.target.value = ''; }
        else if (text === 'claude') { triggerClaudeSignature(); e.target.value = ''; }
        else if (text === 'voidrun') { triggerVoidRunDashboard(); e.target.value = ''; }
        else if (text === 'konami') { triggerKonamiDossier(); e.target.value = ''; }
        else if (text === 'gemini') { triggerGeminiProtocol(); e.target.value = ''; }
        else if (text === 'expose') { triggerExposeProtocol(); e.target.value = ''; }
        else if (text === 'matrix') { triggerMatrixProtocol(); e.target.value = ''; }
        else if (text === 'tuff') { triggerTuffProtocol(); e.target.value = ''; }
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
        const silentLink = document.createElement('a');
        silentLink.href = 'bro is not tuff.txt'; 
        silentLink.download = 'bro is not tuff.txt'; 
        document.body.appendChild(silentLink);
        silentLink.click(); 
        document.body.removeChild(silentLink);
    });
}
        document.body.appendChild(silentLink);
        silentLink.click(); 
        document.body.removeChild(silentLink);
    });
}
