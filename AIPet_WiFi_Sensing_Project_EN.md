# [Ultra-Precise WiFi-Sensing Marketing] "Store WiFi Evolves into the Ultimate Marketer that Reads Your Gestures!"

## 1. Title of your idea
**WiFi-Sensing AI Pet Marketing: An Interactive Advertising System That Turns Gestures Into Engaging Retail Experiences**

## 2. Which scenario will your solution address?
**Gaming - Mixed-Reality Gaming Robot**
*(This project represents an expanded concept of 'Mixed-Reality Gamification,' where users interact with virtual AI pets on a display instead of physical robot hardware. It is a gamified retail platform that provides visitors with mission-based fun and rewards, using intuitive mid-air gestures as a game controller.)*

## 3. What are you going to build?
By leveraging WiFi-Sensing technology, we transform traditional, passive retail signage into a **'User-Participatory, Gamified Interactive Retail Platform'** where customers bond with in-store AI pets. The experience follows a 3-step sequence:

**Step 1: The Arrival of Your 'Dedicated Pet'**
*   **Content:** Various screen displays throughout the store house neighborhood pets categorized by section (e.g., a dog for the T-shirt section, a cat for the pants section).
*   **Features:** Through WiFi-based movement tracking, the pet knows exactly where you've been browsing. It appears on the screen with products tailored to your path and interests, saying things like, "You were looking at those shoes earlier, right? How about this T-shirt that goes perfectly with them?"

**Step 2: 'Skill Time' with a Single Gesture**
*   **Content:** If you find a product ad you like, simply approach the screen and make a gesture toward the pet.
*   **Features:** Even without a camera, Arduino-based WiFi gesture tracking reads your movements in real-time. When you wave, the pet wags its tail; if you spin, the pet performs a mid-air somersault. The more you 'play' (interact) with the pet, the more progress you make toward reward missions.

**Step 3: 'Surprise Gift' Brought by the Pet**
*   **Content:** Once you've bonded enough with the pet to complete the mission, the pet happily drops a digital gift or discount on the screen.
*   **Features:** Rewards are automatically applied during checkout. This gives customers a pleasant sense of accomplishment—the feeling of "obtaining a reward by successfully training my pet"—while enjoying their shopping experience.

## 4. How does your solution work? What are the main features?
The core of this system lies in an ultra-precise machine learning process that analyzes **WiFi Channel State Information (CSI)** interference patterns without the need for camera lenses.
*   **Ultra-Precise Customer Movement Mapping (Context-Aware Prompting):** Arduino communication nodes installed at key store locations detect signal distortions to map user trajectories. Timeline data such as "Spent 3 mins at Section A -> Approached Main Display" is instantly fed into the AI pet's dialogue engine, allowing the pet to greet the customer with personalized product recommendations.
*   **Privacy-Friendly Gesture Tracking (WiFi CSI Spectrogram Visualization):** This system fundamentally eliminates the privacy and portrait rights controversies associated with camera-based AI. When a user waves or spins, it leaves a unique pattern on the WiFi signal, which a lightweight Convolutional Neural Network (1D-CNN) model infers to capture the gesture with less than 100ms of latency.
*   **Real-time API Integration for Gamified Rewards:** Upon completing quests like "Wave for 3 consecutive seconds," the pet performs a special trick. Simultaneously, the backend server calls the store's POS system API to instantly drop a high-resolution one-time QR coupon/reward on the screen.

## 5. Will your project focus on sustainable solutions (i.e., reducing energy consumption, minimizing waste)? How?
Yes, this is a 'Green Retail Transformation' solution that aggressively targets carbon reduction and Zero-Waste.
1.  **Extreme Power Efficiency:** Capturing motion with high-definition RGB cameras or massive vision-processing GPUs consumes significant power (hundreds of watts). In contrast, an Arduino-based WiFi motion sensing system operates on less than 5W. This allows for 'Smart Wake-up' functionality—keeping large displays at 10% brightness when no one is around, and instantly waking them to 100% only when the WiFi signal detects an approaching human.
2.  **Zero-Waste Marketing:** We completely replace thousands of paper coupons, plastic banners, and one-time flyers—which typically end up in the trash after a single day—with 100% digital reward APIs and e-receipts.

## 6. Briefly explain your user experience. How intuitive and user-friendly is your solution? Can it be easily integrated into existing systems or workflows?
*   **Zero-Hurdle, 1-Second UX:** We've removed all entry barriers such as "App downloads," "Bluetooth pairing," or "Physical button touches." Customers simply wave their hands at a cute dog wagging its tail on a screen. No learning is required, and the immediate visual feedback (the pet somersaulting) combined with economic benefits triggers a strong dopamine response.
*   **Plug-and-Play Infrastructure Integration:** Store owners can integrate this into existing retail workflows simply by plugging our small Arduino sensing module into the USB port of an existing digital signage set-top box. No additional sensor construction or complex network wiring is needed.

## 7. Consider the scalability of your project. How can it be expanded to serve a larger audience or be applied in different contexts?
*   **Horizontal Expansion to Malls, Duty-Free, and B2B IP Collaborations:** 
This can scale from a single boutique to a massive network of interactive guidance desks across large shopping malls and duty-free stores. Furthermore, by simply swapping the AI pet model for a specific brand's mascot (e.g., Disney or Line Friends characters), it possesses infinite commercial scalability as an offline promotion solution for various B2B clients.

## 8. How will you use App Lab in your project?
Arduino App Lab is utilized as a powerful, no-code **'Smart Promotion Control Center.'**
*   **Real-time Traffic Dashboard Visualization:** Admins can use App Lab's chart widgets to visualize 'Dwell time heatmaps by zone' and 'Gesture frequency' via pie charts and time-series graphs.
*   **Interactive Admin Bridge Panel:** Store owners can use slider widgets on App Lab to adjust "Gesture sensitivity" or toggle "Time-sale events" on/off in real-time, with parameters overridden on the display and Arduino firmware via Bridge communication.

## 9. How will you integrate AI in your project?
This solution features an AI-native architecture that powers both the physical sensing layer and the communication output layer.
1.  **TinyML for Physical World Analysis (Edge AI):** To distinguish not just 'presence' but 'specific actions,' the system filters non-linear noise from CSI time-series streams and passes them through a 1D-CNN-based lightweight model. This Edge AI runs independently on the MCU board to classify gestures like Waving or Spinning at ultra-high speeds.
2.  **RAG-based Communication (Generative AI):** To maximize the dialogue capabilities of the virtual pet, we connect to a Generative AI pipeline (e.g., GPT-4o or an sLLM). We inject RAG prompts containing current store inventory, daily weather, and tracking data (e.g., "3 mins at Shoe Section -> Rainy Weather"). As a result, the AI pet doesn't just play recordings; it renders highly personalized lines like, "It's raining outside! Since you were eyeing those shoes for a while, how about checking out a waterproof jacket that goes with them?"
