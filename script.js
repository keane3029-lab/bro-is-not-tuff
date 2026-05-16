// ============================================================================
// VOIDRUN CORE UTILITY SYSTEM & AUDIO SYNTHESIS ENGINE
// Location: Iponan Elementary School // Grade 5 Protocols Enabled
// Special Contributors: Claude // Anthropic Protocol Upgrades
// ============================================================================

const AudioEngine = {
    ctx: null,

    // Claude's upbeat 3-note chiptune jingle for the system diagnostic
    playJingle() {
        this.init();
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
    }
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    // Crisp terminal mechanical keyclick sound
    playClick() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
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
    }
};

// ==========================================
// KEYBOARD CODENAME CAPTURE ENGINE
// ==========================================
let inputBuffer = "";

window.addEventListener("keydown", (e) => {
    AudioEngine.playClick();
    else if (inputBuffer.includes("voidrun")) {
        triggerVoidRunDashboard();
        inputBuffer = "";
    }
    
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
});

// ==========================================
// TRIGGER ACTIONS
// ==========================================

function triggerPenMeltdown() {
    AudioEngine.playMeltdown();
    console.warn("⚠️ SYSTEM EVENT: STATIONERY THEFT FAULT REGISTERED.");
    document.body.style.transition = "0.3s";
    document.body.style.backgroundColor = "#660000"; 
    setTimeout(() => {
        alert("SYSTEM ERROR: Carl is screaming about a stolen pen again! (Phase 3 Loaded)");
        document.body.style.backgroundColor = "#050505"; 
    }, 500);
}

function triggerCrash() {
    AudioEngine.playCrash();
    console.error("FATAL CRASH: Layout gravity.js engine fault.");
    
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
    console.log("🏆 DIRECTIVE VALIDATED: Grade 5 Status Active.");
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
        "• CORE CORE: Active (Grade 5 Protocol)\n" +
        "• DEPLOYMENT: GitHub Pages Production\n" +
        "• AUDIO ENGINE: Web Audio API (Chiptune Synthesizer)\n" +
        "• CODENAMES LOADED: 'pen' | 'crash' | 'iponan' | 'claude' | 'voidrun'\n" +
        "• SECRET LAYERS: 10-Key Konami Code Active\n" +
        "• COLLABORATION NODE: Claude // Anthropic\n" +
        "• SAGA STATUS: Locked & Unredacted.\n" +
        "====================================";
        
    alert(statusReport);
    console.log("%c" + statusReport, "color: #39ff14; font-family: monospace;");
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
    });
}

// ==========================================
// CLAUDE'S BONUS KONAMI PROTOCOL
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
    document.getElementById('dossier-modal').style.display = 'flex';
}

function closeDossier() {
    AudioEngine.playClick();
    document.getElementById('dossier-modal').style.display = 'none';
}

// ==========================================
// TEXT ARCHIVE LOCAL FILE COMPILER (.txt)
// ==========================================
document.getElementById('download-btn').addEventListener('click', () => {
    AudioEngine.playClick();
    
    const logContent = `==================================================
VOIDRUN SYSTEMS | OFFICIAL SECURE RECORD ARCHIVE
CASE DATA: BRO IS NOT TUFF (THE COMPLETE SAGA)
STATION TIMELINE: MIJS RECORDS -> IPONAN GRADE 5
==================================================

Phase 1: The Anthem
It was Grade 4 at Mary Infant Jesus School (MIJS). The school was small enough that word traveled fast, and my new track, "Bro is Not Tuff," was traveling faster than a wildfire. The song called out the fake personas and the bullies—specifically aiming at Carl, who spent his days hurting others and acting untouchable.

Phase 2: The Physical Confrontation
Carl couldn't handle the truth of the lyrics. He cornered me in the hallway, his face red with a mix of panic and ego. He didn’t use words; he lunged. His hands clamped around my throat, pinning me against the wall.
"Take it down!" he hissed, trying to squeeze the air out of me. "Delete it now!"
He thought that by choking me, he could choke out the song. But even with my back against the wall, I knew one thing: The song stays up.

Phase 3: The Karma of the Pen
In the days following the attack, Carl spiraled. He kept trying to play the victim, telling everyone he "did nothing wrong." But his true colors kept showing. He stayed aggressive, hurting other kids, and then—in the most pathetic moment of the year—he had a total meltdown over a stolen pen.
The "tough guy" was literally screaming and complaining about stationary. It was the moment everyone realized the song was 100% right.

Phase 4: The Storming of the Office
I’d had enough of his threats. I headed for the Principal’s office, determined to end it. Carl saw me and tried to intercept, ready to fight back to keep me from reporting him. He thought he could intimidate me one last time.
But then he looked behind me. I wasn't alone. I had my teammates—a solid crew of friends who stood as a wall between me and him. Carl froze. He realized he couldn't fight a whole group, and he couldn't lie his way out of a room full of witnesses.
I looked at his panicked face, and I didn't get mad. I just laughed. The laugh was the final blow to his ego.

Phase 5: Part 2 — The Sequel Drops
While Carl was busy trying to save face and whining about his pen, I wasn't just sitting around. I went back to the lab and made "Bro is Not Tuff: Part 2."
If the first song made him mad, Part 2 was his funeral. It detailed the hallway attack, his fake "victim" act, and the hilarious pen incident. I didn't just report him to the Principal; I immortalized his failure in the music.

Phase 6: The Promise of the "Exposed" Video
I told the Principal everything, and Carl finally had to face the music—literally and figuratively. But I wasn't finished. As I walked past him one last time, I told him the words that would haunt him for the rest of elementary school:
"I am never taking these down. And just wait... because I’m making an exposed video in the future. Everyone is going to see exactly who you are."
Carl stood there, realized he’d lost his power, his reputation, and his "toughness" all in one go. He wanted to be a villain, but thanks to the song and the crew, he just became a memory of what happens when karma finally hits.

==================================================
LOG EXPORT COMPLETE // RECORD LOCKED BY OPERATOR VOIDRUN
==================================================`;

    const dataBlob = new Blob([logContent], { type: 'text/plain' });
    const pointerUrl = URL.createObjectURL(dataBlob);
    
    const silentLink = document.createElement('a');
    silentLink.href = pointerUrl;
    silentLink.download = 'bro is not tuff.txt'; 
    
    document.body.appendChild(silentLink);
    silentLink.click(); 
    
    document.body.removeChild(silentLink);
    URL.revokeObjectURL(pointerUrl);
    
    console.log("💾 Log package compiled and saved locally as 'bro is not tuff.txt'.");
});

// ==========================================
// INITIALIZE SYSTEM NODE
// ==========================================
window.onload = () => {
    console.log("%c [SYSTEM ONLINE] ", "color: #39ff14; font-weight: bold; background: #000; padding: 2px; border: 1px solid #39ff14;");
    console.log("Identity Confirmed: VoidRun.");
    console.log("Awaiting commands: 'pen' | 'crash' | 'iponan' | 'claude' | (Konami Code on keys)");
};
