// ============================================================================
// VOIDRUN CORE UTILITY SYSTEM & AUDIO SYNTHESIS ENGINE
// Location: Iponan Elementary School // Grade 5 Protocols Enabled
// Special Contributors: Claude // Anthropic Protocol Upgrades
// ============================================================================

const AudioEngine = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

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

    playSuccess() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25];
        
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
    }
};

// ==========================================
// KEYBOARD CODENAME CAPTURE ENGINE
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
        "• CODENAMES LOADED: 'pen' | 'crash' | 'iponan' | 'claude' | 'voidrun' | 'konami'\n" +
        "• SECRET LAYERS: 10-Key Konami Code Active\n" +
        "• COLLABORATION NODE: Claude // Anthropic\n" +
        "• SAGA STATUS: Locked & Unredacted.\n" +
        "====================================";
    alert(statusReport);
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
    });
}

// ==========================================
// DESKTOP PHYSICAL CONTROLLER LOGIC (ARROW KEYS)
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
// TEXT ARCHIVE LOCAL FILE COMPILER (.txt)
// ==========================================
const downBtn = document.getElementById('download-btn');
if (downBtn) {
    downBtn.addEventListener('click', () => {
        AudioEngine.playClick();
        const logContent = `==================================================\nVOIDRUN SYSTEMS | OFFICIAL SECURE RECORD ARCHIVE\n==================================================\n\n[Content Locked Archive Log Complete]`;
        const dataBlob = new Blob([logContent], { type: 'text/plain' });
        const pointerUrl = URL.createObjectURL(dataBlob);
        const silentLink = document.createElement('a');
        silentLink.href = pointerUrl;
        silentLink.download = 'bro is not tuff.txt'; 
        document.body.appendChild(silentLink);
        silentLink.click(); 
        document.body.removeChild(silentLink);
        URL.revokeObjectURL(pointerUrl);
    });
}
