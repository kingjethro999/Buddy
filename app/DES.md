

### 🚀 The Buddy Vibe (What you're building)

  * **It's a desktop buddy:** An AI agent that hangs out on your computer, sees your screen, and actually *does* stuff across your apps.
  * **The goal:** Stop wasting time clicking around. You just talk or type, and Buddy handles the messy, repetitive stuff like finding installers, running terminal commands, or explaining codebases.
  * **Action-oriented:** It's like Alexa, but for your PC, and it can take system actions (unlike that old Cortana guy).
  * **Voice & Chat:** It's totally conversational—voice-to-voice, voice-to-chat, or chat-to-voice.
  * **Local-First & Private:** You're smart\! No storing user data on a server. All the cool stuff (preferences, personality, history) lives locally on the machine (using local storage).
  * **Learning Curve:** It gets to know you—like noticing you prefer moving zips to `/Documents` instead of `/Downloads`. It builds a local "personality" over time.
  * **Cross-Platform:** Needs to work on Windows, Linux, and macOS.
  * **The Problem with Electron:** You already figured this out—Electron is too slow and buggy, especially for a real-time voice agent. It needs to be **fast and native**.
  * **AI Model:** You're planning to use **Gemini** via **OpenRouter** for the brains and human interaction, which is a good call.

-----

### 🛠️ The Suggested Tech Stack (The "Spine")

This stack is built for speed, privacy, and system-level control.

#### 1\. Core Languages (The Engine)

  * **Rust (Core Agent Runtime):** This is the backbone. It handles all the low-latency, heavy-lifting stuff:
      * Running the main daemon (the "always-on" part).
      * System actions (file operations, running terminal commands).
      * Logging and safety checks.
      * Making sure it feels snappy and native.
  * **Python (AI Orchestration Layer):** This is the brains of the operation:
      * Talking to Gemini/OpenRouter (API calls).
      * Deciding *what* to do (intent parsing, tool routing).
      * Handling the personality and behavioral learning logic.
      * *The rule: Rust does actions. Python decides actions.*

#### 2\. OS-Level Stuff & Terminal

  * **All in Rust:** File creation, moving, searching, and deleting.
  * **Terminal Execution:** Rust spawns the native shells (like `bash`, `zsh`, `PowerShell`) to run commands securely.

#### 3\. Voice Pipeline (Must be fast\!)

  * **Speech-to-Text (STT):**
      * **Whisper.cpp (Recommended):** It's local, low-latency, and great for privacy. Use Rust bindings for this.
  * **Text-to-Speech (TTS):**
      * **Piper TTS** (local) or **Gemini TTS** (cloud) for responses.
  * **Wake Word Detection:**
      * **Porcupine** or **Vosk** for the "Hey Buddy" trigger, running in a low-level Rust audio loop.

#### 4\. UI (The Floating Icon & Chat)

  * **Tauri (Rust + minimal web UI):** This is the perfect middle-ground.
      * It uses a Rust backend but lets you build the chat interface with lightweight web tech without the massive Electron/Chromium overhead.
      * It's for the floating icon, the chat window, and the settings panel.

#### 5\. Local Data

  * **SQLite:** Use a local SQLite database for all the user preferences, action history, behavioral patterns, and that cool personality logic you want to build.

#### 6\. Minimal Backend (Just for Login)

  * **Simple Auth Service (FastAPI/Node.js):** Keep the server tiny. It only needs to handle the initial authentication, give the app a username and token, and then disappear. No user logs or behavioral data go here\!

The recommended local storage technology is **SQLite** (with optional encryption using `SQLCipher`).

This database will store the following specific types of data locally:

  * User preferences
  * Behavior patterns
  * Action history
  * Confirmation rules
  * Personality embeddings


Besides user preferences and behavioral patterns, the local SQLite database will store the following types of data:

  * **Action history**
  * **Confirmation rules**
  * **Personality embeddings**


Based on the document, the recommended tools for the voice stack components are:

### 🎤 Speech-to-Text (STT)

The main recommended tool for a low-latency, offline, and privacy-first approach is:

  * **Whisper.cpp via Rust bindings**

The document also lists other options:

  * Vosk (offline)
  * Deepgram / Google STT (cloud, optional)

### 🎙 Wake Word Detection

The recommended tools to run in the low-level Rust audio loop are:

  * **Porcupine**
  * **Vosk keyword spotting**
  * Lightweight Whisper-based detection

The core principles that drive the choice of the technology stack for the Buddy application are that the agent **must** be:

  * **Low-latency**
  * **Always-on**
  * **OS-native**
  * **Safe for system actions**
  * **Local-first**
  * **Multi-platform**
  * **Not a browser pretending to be an app** (which immediately rules out Electron, pure web runtimes, and heavy VM-based stacks).

The ultimate requirement is for **native performance + flexible AI glue**.

Rust is specifically recommended for handling file operations (like creating, moving, renaming, deleting, searching, and traversing directories) because this is identified as **"exactly Rust's sweet spot."**

The key reasons it is ideal for these system-level tasks are:

  * **Strong Filesystem and Process Control:** Rust has excellent capabilities built in for low-level interaction with the operating system's filesystem.
  * **Safe Memory Model:** Its memory safety model is critical for operations that involve system-level access, ensuring greater stability and reliability when running file commands.
  * **Native Performance:** As a compiled language, it provides the native speed and performance necessary for low-latency actions, meaning file operations execute quickly without lag.
  * **Permission-Aware Operations:** It is well-suited for handling operations that require being aware of and correctly managing system permissions.
