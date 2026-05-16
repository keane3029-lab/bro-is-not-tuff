// --- VOIDRUN OPERATOR CORE UTILITIES ---
// Location: Iponan Elementary School // Grade 5 Protocols Enabled

let inputBuffer = "";

// ==========================================
// 1. KEYBOARD LISTENER (EASTER EGGS)
// ==========================================
window.addEventListener("keydown", (e) => {
    // Collect keystroke into the evaluation stream
    inputBuffer += e.key.toLowerCase();
    
    // Safety crop to limit memory overhead
    if (inputBuffer.length > 15) {
        inputBuffer = inputBuffer.substring(1);
    }

    // TRIGGER 1: "pen" (Carl's Meltdown Simulation)
    if (inputBuffer.includes("pen")) {
        triggerPenMeltdown();
        inputBuffer = ""; 
    }

    // TRIGGER 2: "crash" (Physics Gravity Engine Drop)
    if (inputBuffer.includes("crash")) {
        triggerCrash();
        inputBuffer = ""; 
    }

    // TRIGGER 3: "iponan" (Grade 5 Status Unlocked)
    if (inputBuffer.includes("iponan")) {
        triggerIponanSuccess();
        inputBuffer = "";
    }
});


// ==========================================
// 2. ACTION DEFINITIONS FOR COMMANDS
// ==========================================

// MIJS Phase 3 Recall Action
function triggerPenMeltdown() {
    console.warn("⚠️ SYSTEM EVENT: STATIONERY THEFT FAULT REGISTERED.");
    
    document.body.style.transition = "0.3s";
    document.body.style.backgroundColor = "#660000"; // Deep alert red
    
    setTimeout(() => {
        alert("SYSTEM ERROR: Carl is screaming about a stolen pen again! (Phase 3 Loaded)");
        document.body.style.backgroundColor = "#050505"; // Recover background
    }, 500);
}

// Custom Simulator Physics Crash Action
function triggerCrash() {
    console.error("FATAL CRASH: Layout gravity.js engine fault.");
    
    // Collect all modular layout blocks
    const units = document.querySelectorAll('.phase, .operator-profile, h1, .warning-banner, #download-btn');
    
    units.forEach((el) => {
        const randomX = Math.floor(Math.random() * 400) - 200; // Left-Right slide range
        const randomSpin = Math.floor(Math.random() * 120) - 60; // Spin angles
        
        el.style.transition = "transform 2s cubic-bezier(0.47, 0, 0.745, 0.715), opacity 1.5s";
        el.style.transform = `translate(${randomX}px, 1200px) rotate(${randomSpin}deg)`; // Fall downward offscreen
        el.style.opacity = "0";
    });

    // Forced terminal recovery reboot after 4 seconds
    setTimeout(() => {
        location.reload();
    }, 4000);
}

// Grade 5 Success Protocol Action
function triggerIponanSuccess() {
    console.log("🏆 DIRECTIVE VALIDATED: Grade 5 Status Active at Iponan Elementary.");
    
    // Override global border/text accent color to Gold
    document.documentElement.style.setProperty('--accent', '#ffd700');
    
    const profile = document.querySelector('.operator-profile');
    if (profile) {
        profile.style.transition = "0.5s ease";
        profile.style.transform = "scale(1.04)";
        profile.style.borderColor = "#ffd700";
        profile.style.boxShadow = "0 0 25px rgba(255, 215, 0, 0.35)";
    }

    alert("WELCOME TO IPONAN GRADE 5: Operator has unlocked Gold Class status.");
    
    // Auto restore to baseline stealth green styling after 5 seconds
    setTimeout(() => {
        document.documentElement.style.setProperty('--accent', '#39ff14');
        if (profile) {
            profile.style.transform = "scale(1)";
            profile.style.borderColor = "var(--accent)";
            profile.style.boxShadow = "none";
        }
    }, 5000);
}


// ==========================================
// 3. TEXT ARCHIVE EXPORT UTILITY
// ==========================================
document.getElementById('download-btn').addEventListener('click', () => {
    // Compiling raw string payload for text backup file
    const logContent = `==================================================
VOIDRUN SYSTEMS | OFFICIAL SECURE RECORD ARCHIVE
CASE DATA: BRO IS NOT TUFF (THE COMPLETE SAGA)
STATION TIMELINE: MIJS RECOREDS -> IPONAN GRADE 5
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

    // Process a local memory pointer file stream
    const dataBlob = new Blob([logContent], { type: 'text/plain' });
    const pointerUrl = URL.createObjectURL(dataBlob);
    
    // Form temporary synthetic link trigger
    const silentLink = document.createElement('a');
    silentLink.href = pointerUrl;
    silentLink.download = 'bro is not tuff.txt'; // Custom clean filename match
    
    document.body.appendChild(silentLink);
    silentLink.click(); // Automate device downloads directory placement
    
    // Reclaim memory pipeline
    document.body.removeChild(silentLink);
    URL.revokeObjectURL(pointerUrl);
    
    console.log("💾 Log package compiled and saved locally as 'bro is not tuff.txt'.");
});


// ==========================================
// 4. CORE SYSTEM INITIALIZATION
// ==========================================
window.onload = () => {
    console.log("%c [SYSTEM ONLINE] ", "color: #39ff14; font-weight: bold; background: #000; padding: 2px; border: 1px solid #39ff14;");
    console.log("Identity Confirmed: VoidRun.");
    console.log("Current School Node: Iponan Elementary (Grade 5).");
    console.log("Awaiting hotkeys: 'pen' | 'crash' | 'iponan'");
};