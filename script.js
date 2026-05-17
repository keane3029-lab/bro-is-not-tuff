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
    },

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
// CENTRAL OUTPUT STREAM CONTROLLER (IN-UI)
// ==========================================
function printToTerminal(text, type = "log-system") {
    const logBox = document.getElementById('terminal-log');
    if (!logBox) return;

    const line = document.createElement('div');
    line.className = `log-line ${type}`;
    line.innerText = text.startsWith(">>") ? text : `>> ${text}`;
    logBox.appendChild(line);

    logBox.scrollTop = logBox.scrollHeight;
}

// ==========================================
// AUTOMATED LINE-BY-LINE BOOT MATRIX
// ==========================================
const bootLines = [
    { text: "VOIDRUN_SYSTEMS v5.2 // INITIALIZING...", type: "log-system" },
    { text: "LOADING ARCHIVE PROTOCOLS... OK", type: "log-system" },
    { text: "AUDIO SYNTH ENGINE... OK", type: "log-info" },
    { text: "KEYWORD MATRIX... 9 CORE PROTOCOLS ACTIVE", type: "log-system" },
    { text: "KONAMI CONTROL ARRAY... ARMED", type: "log-error" },
    { text: "AWAITING OPERATOR INPUT...", type: "log-warning" }
];

let systemReady = false;

function runBootSequence() {
    const logBox = document.getElementById('terminal-log');
    if (logBox) logBox.innerHTML = ""; // Clear out default layout markup
    
    let currentLineIndex = 0;

    function printNextBootLine() {
        if (currentLineIndex < bootLines.length) {
            const currentItem = bootLines[currentLineIndex];
            let currentStr = "";
            let charIndex = 0;
            
            // Build temporary line element for typewriter animation simulation
            const line = document.createElement('div');
            line.className = `log-line ${currentItem.type}`;
            line.innerText = ">> ";
            if (logBox) logBox.appendChild(line);

            function typeCharacter() {
                if (charIndex < currentItem.text.length) {
                    currentStr += currentItem.text[charIndex];
                    line.innerText = `>> ${currentStr}`;
                    charIndex++;
                    if (logBox) logBox.scrollTop = logBox.scrollHeight;
                    setTimeout(typeCharacter, 25); // Velocity of single character output
                } else {
                    currentLineIndex++;
                    setTimeout(printNextBootLine, 250); // Pause window before loading subsequent line
                }
            }
            typeCharacter();
        } else {
            systemReady = true; // Unlock runtime user interface inputs
            const mobileInput = document.getElementById('terminal-input');
            if (mobileInput) {
                mobileInput.removeAttribute('disabled');
                mobileInput.placeholder = "Enter protocol code...";
                mobileInput.focus();
            }
        }
    }
    
    setTimeout(printNextBootLine, 400);
}

// ==========================================
// KEYBOARD COMMAND REGISTRY & BUFFER ENGINE
// ==========================================
let commandHistory = [];
let historyIndex = -1;
let backgroundBuffer = "";

window.addEventListener("keydown", (e) => {
    if (!systemReady) return; // Prevent interference during system boot phase

    if (document.activeElement !== document.getElementById('terminal-input')) {
        AudioEngine.playClick();
        backgroundBuffer += e.key.toLowerCase();
        if (backgroundBuffer.length > 15) {
            backgroundBuffer = backgroundBuffer.substring(1);
        }
        evaluateBuffer(backgroundBuffer, true);
    }
});

function evaluateBuffer(inputStr, isBackground = false) {
    const cleanInput = inputStr.trim().toLowerCase();
    if (!cleanInput) return;

    if (cleanInput === "pen") { triggerPenMeltdown(); clearBuffers(isBackground); }
    else if (cleanInput === "crash") { triggerCrash(); clearBuffers(isBackground); }
    else if (cleanInput === "iponan") { triggerIponanSuccess(); clearBuffers(isBackground); }
    else if (cleanInput === "claude") { triggerClaudeSignature(); clearBuffers(isBackground); }
    else if (cleanInput === "voidrun") { triggerVoidRunDashboard(); clearBuffers(isBackground); }
    else if (cleanInput === "gemini") { triggerGeminiProtocol(); clearBuffers(isBackground); }
    else if (cleanInput === "expose") { triggerExposeProtocol(); clearBuffers(isBackground); }
    else if (cleanInput === "matrix") { triggerMatrixProtocol(); clearBuffers(isBackground); }
    else if (cleanInput === "tuff") { triggerTuffProtocol(); clearBuffers(isBackground); }
    else if (cleanInput === "konami") { triggerKonamiDossier(); clearBuffers(isBackground); }
    else if (!isBackground) {
        printToTerminal(`UNKNOWN CODENAME: '${cleanInput}'. SYSTEM UNRESPONSIVE.`, "log-error");
    }
}

function clearBuffers(isBackground) {
    if (isBackground) backgroundBuffer = "";
}

// ==========================================
// PROTOCOL ANIMATION DISPATCHERS
// ==========================================

function triggerPenMeltdown() {
    AudioEngine.playMeltdown();
    printToTerminal("CRITICAL WARNING: CARL STATIONERY CONFLICT PROTOCOL DETECTED.", "log-error");
    printToTerminal("Phase 3: Subject undergoes systemic public screaming tantrum over pen.", "log-warning");
    document.body.style.transition = "0.3s";
    document.body.style.backgroundColor = "#550000"; 
    setTimeout(() => { document.body.style.backgroundColor = "#050505"; }, 600);
}

function triggerCrash() {
    AudioEngine.playCrash();
    printToTerminal("FATAL TERMINAL FAULT GENERATED. SCATTERING CORE INTERFACE NODES...", "log-error");
    const units = document.querySelectorAll('.phase, .operator-profile, h1, .warning-banner, #download-btn, .terminal-input-container, .terminal-log');
    units.forEach((el) => {
        const randomX = Math.floor(Math.random() * 400) - 200; 
        const randomSpin = Math.floor(Math.random() * 120) - 60; 
        el.style.transition = "transform 2s cubic-bezier(0.47, 0, 0.745, 0.715), opacity 1.5s";
        el.style.transform = `translate(${randomX}px, 1200px) rotate(${randomSpin}deg)`; 
        el.style.opacity = "0";
    });
    setTimeout(() => { location.reload(); }, 3500);
}

function triggerIponanSuccess() {
    AudioEngine.playSuccess();
    printToTerminal("VALIDATION MET: UPGRADING GRID CONNECTION TO IPONAN GRADE 5.", "log-system");
    printToTerminal("Operator status set to Gold Class supremacy.", "log-system");
    document.documentElement.style.setProperty('--accent', '#ffd700');
    const profile = document.querySelector('.operator-profile');
    if (profile) {
        profile.style.transition = "0.5s ease";
        profile.style.transform = "scale(1.03)";
        profile.style.borderColor = "#ffd700";
        profile.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.3)";
    }
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
    printToTerminal("[ SECURITY CLEARANCE VALIDATED ]", "log-system");
    printToTerminal("CODENAME: CLAUDE // ANTHROPIC NETWORK footprint verified active.", "log-system");
    printToTerminal("System Architecture: Stable terminal logs routing correctly.", "log-system");
}

function triggerVoidRunDashboard() {
    AudioEngine.playJingle();
    printToTerminal("=== SYSTEM DIAGNOSTIC REGISTER ===", "log-system");
    printToTerminal("• LOG: Active (Grade 5 Pipeline Override)", "log-system");
    printToTerminal("• COMPILER: Web Audio Synthesizer Verified", "log-system");
    printToTerminal("• CODENAMES: 10 Keyword Vectors Configured", "log-system");
    printToTerminal("• ARCHITECT NETWORK: Claude & Gemini Core Sync", "log-system");
    printToTerminal("==================================", "log-system");
}

function triggerGeminiProtocol() {
    AudioEngine.playGeminiChime();
    printToTerminal("✨ [ CODENAME: GEMINI PROTOCOL ENGAGED ] ✨", "log-info");
    printToTerminal(">> Establishing high-tier link with Google Neural Grid.", "log-info");
    printToTerminal(">> Custom UI element layout color shift: NEON BLUE ACTIVE.", "log-info");
    
    document.body.style.transition = "background-color 0.8s ease";
    document.body.style.backgroundColor = "#000a1a";
    document.documentElement.style.setProperty('--accent', '#00b4d8');
    
    const profile = document.querySelector('.operator-profile');
    if (profile) {
        profile.style.transition = "all 0.8s ease";
        profile.style.borderColor = "#00b4d8";
        profile.style.boxShadow = "0 0 25px rgba(0, 180, 216, 0.35)";
    }
    setTimeout(() => {
        document.body.style.backgroundColor = "#050505";
        document.documentElement.style.setProperty('--accent', '#39ff14');
        if (profile) { profile.style.borderColor = "var(--accent)"; profile.style.boxShadow = "none"; }
    }, 6000);
}

function triggerExposeProtocol() {
    AudioEngine.playExposeGlitch();
    printToTerminal("⚠️ [ FUTURE COUNTDOWN THREAT TRACKED ] ⚠️", "log-warning");
    printToTerminal(">> Lyrical Warning Matrix deployed to subject Carl.", "log-warning");
    printToTerminal(">> 'Just wait... because I’m making an exposed video.'", "log-warning");
    document.body.style.transition = "background-color 0.2s";
    document.body.style.backgroundColor = "#332b00";
    document.documentElement.style.setProperty('--accent', '#ffea00');
    setTimeout(() => {
        document.body.style.backgroundColor = "#050505";
        document.documentElement.style.setProperty('--accent', '#39ff14');
    }, 500);
}

function triggerMatrixProtocol() {
    AudioEngine.playMatrixSweep();
    printToTerminal("⚡ [ CENTRAL MATRIX OVERRIDE RUNNING ] ⚡", "log-system");
    printToTerminal(">> Purging subject database... Carl authority files dropped to zero.", "log-system");
    document.documentElement.style.setProperty('--accent', '#00ff00');
    document.body.style.backgroundColor = "#001f00";
    setTimeout(() => {
        document.body.style.backgroundColor = "#050505";
        document.documentElement.style.setProperty('--accent', '#39ff14');
    }, 4000);
}

function triggerTuffProtocol() {
    AudioEngine.playFailTone();
    printToTerminal("❌ [ SCANNER RESPONSE COMPLETE ] ❌", "log-error");
    printToTerminal(">> Evaluating subject posture database...", "log-error");
    printToTerminal(">> Result: Bro is officially confirmed NOT tuff.", "log-error");
}

// ==========================================
// INTERACTIVE INPUT FIELD CONNECTOR (CLI)
// ==========================================
const mobileInput = document.getElementById('terminal-input');

if (mobileInput) {
    // Force field status to locked until boot sequence processes finish
    mobileInput.setAttribute('disabled', 'true');
    mobileInput.placeholder = "System initializing... please wait.";

    mobileInput.addEventListener('keydown', (e) => {
        if (!systemReady) return;

        if (e.key === 'Enter') {
            AudioEngine.playClick();
            const text = mobileInput.value.trim();
            
            if (text !== '') {
                printToTerminal(text, "log-user");
                commandHistory.push(text);
                historyIndex = commandHistory.length;
                evaluateBuffer(text, false);
            }
            mobileInput.value = ''; 
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                mobileInput.value = commandHistory[historyIndex];
            }
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                historyIndex++;
                mobileInput.value = commandHistory[historyIndex];
            } else if (historyIndex === commandHistory.length - 1) {
                historyIndex = commandHistory.length;
                mobileInput.value = '';
            }
        }
    });
}

// ==========================================
// 10-KEY CONTROLLER SYSTEM DIRECTORY (KONAMI)
// ==========================================
const konamiCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
let konamiIndex = 0;

window.addEventListener('keydown', (e) => {
    if (!systemReady) return;

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
    printToTerminal("⚠️ CORRUPT CONSOLE OVERRIDE: INJECTING OUT-OF-BOUNDS DOSSIER DIALOGUE.", "log-error");
    document.body.style.backgroundColor = "#2b0000";
    setTimeout(() => { document.body.style.backgroundColor = "#050505"; }, 200);
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.style.display = 'flex';
}

function closeDossier() {
    AudioEngine.playClick();
    const modal = document.getElementById('dossier-modal');
    if (modal) modal.style.display = 'none';
    printToTerminal("Dossier connection terminated securely.", "log-system");
}

// ==========================================
// DIRECT REPOSITORY ARCHIVE FILE PIPELINE
// ==========================================
const downBtn = document.getElementById('download-btn');
if (downBtn) {
    downBtn.addEventListener('click', () => {
        if (!systemReady) return;
        AudioEngine.playClick();
        printToTerminal("Requesting secure server-side file access... downloading log.", "log-system");
        
        const silentLink = document.createElement('a');
        silentLink.href = 'bro is not tuff.txt'; 
        silentLink.download = 'bro is not tuff.txt'; 
        document.body.appendChild(silentLink);
        silentLink.click(); 
        document.body.removeChild(silentLink);
    });
}

// Initialize boot parameters when browser completes frame execution
window.addEventListener("DOMContentLoaded", runBootSequence);
