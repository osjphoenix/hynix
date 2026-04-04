# Arduino App Lab Tutorials Documentation




---

## Source: https://docs.arduino.cc/software/app-lab/tutorials/getting-started/

Title: Getting Started with Arduino App Lab | Arduino Documentation

URL Source: https://docs.arduino.cc/software/app-lab/tutorials/getting-started/

Published Time: Wed, 25 Mar 2026 12:37:49 GMT

Markdown Content:
Learn how to setup the Arduino App Lab and launch Apps on the UNO Q board.

![Image 1: Arduino App Lab](https://docs.arduino.cc/static/5fca8fb78876ee04bfdda00d7305c76b/a6d36/app-lab-hero.png)

Arduino App Lab

With the [Arduino App Lab](https://www.arduino.cc/en/uno-q/), you can create and deploy **Apps** on the [Arduino® UNO Q](https://store.arduino.cc/products/uno-q) board, which features both a microcontroller and a microprocessor running Linux system. The Arduino App Lab is designed to run both on a personal computer (Windows, MacOS, Linux), and on the UNO Q, where it is pre-installed and automatically updated.

In this guide we will explore:

*   The Arduino App Lab core features.
*   How Apps work, and how they are structured.
*   What a [Brick](https://docs.arduino.cc/software/app-lab/tutorials/bricks/) is, and how they are used in Apps.
*   How to launch an App on an UNO Q board.

**_The Arduino App Lab software also provides several guides and examples for getting started with the UNO Q._**

## Hardware & Software Requirements

### Hardware

*   Computer (Windows/Mac/Linux)
*   [Arduino® UNO Q board](https://store.arduino.cc/products/uno-q)
*   [USB-C® cable](https://store.arduino.cc/products/usb-cable2in1-type-c)

Alternatively, using the board as a [Single Board Computer (SBC)](https://docs.arduino.cc/tutorials/uno-q/single-board-computer/), the following is required:

*   USB-C dongle
*   A monitor and HDMI cable
*   Keyboard and mouse

### Software

*   [Arduino App Lab](https://www.arduino.cc/en/uno-q/)

### Internet Connection

The board is automatically updated when a new update is released. To download and install it, an Internet connection is required. To run Apps, an Internet connection is not required unless using examples that specifically requires it (e.g. connecting to Arduino Cloud, fetching data from external APIs).

## Install & Set Up Arduino App Lab

**_Instructions for your specific OS is available down below._**

1.   Navigate to the [Arduino Software Page](https://www.arduino.cc/en/software/#app-lab-section) and download the Arduino App Lab for your OS.
2.   Download and run the installation file.
3.   Launch the Arduino App Lab.
4.   Connect the UNO Q board to a computer.

After launching the Arduino App Lab and connecting the UNO Q, you will be prompted inside the editor to configure your board's Wi-Fi®, as well as setting a name & password for the board.

**_You will also be prompted to login to your arduino.cc account. This is optional, but you will need to be logged in to use some of the features of the Arduino App Lab._**

### MacOS

On MacOS, run the

`.dmg` file from your Downloads folder, and move it to your Applications folder.![Image 2: MacOS installation](https://docs.arduino.cc/static/fd46aea323403dac5c7e8da2a8314577/a6d36/macos.png)

MacOS installation

### Windows

On Windows, run the

`.exe` file from your Downloads folder, and complete the installation.![Image 3: Windows Installation](https://docs.arduino.cc/static/db8b8833b1f5fa285f0b998bd6f6eff0/a6d36/windows.png)

Windows Installation

### Linux

On LinuxOS (Ubuntu based), extract the downloaded file (

`.tar.gz`). Navigate to the folder and run the application.![Image 4: Linux Installation](https://docs.arduino.cc/static/47c9eaaffe357ae6ac8edcf03c770a84/a6d36/linux.png)

Linux Installation

After extracting the folder, we recommend moving it to e.g.

`$HOME/Desktop` or `$HOME/Applications`:

`1tar -xf ArduinoAppLab*.tar.gz 2mv ArduinoAppLab*/ ~/Desktop`

**Note:** you will need

`libwebkit2gtk-4.1` installed on your machine to successfully run the Arduino App Lab. Install it by running:
*   **Debian / Ubuntu:**

`1sudo apt install libwebkit2gtk-4.1-0`

*   **Arch:**

`1sudo pacman -S webkit2gtk-4.1`

**_Note: To ensure the UNO Q board is properly detected by the Arduino App Lab, your user account must have specific write permissions for the USB device. Without these permissions, the board may not appear in the application or allow connections. Please refer to the [Linux Host Setup](https://docs.arduino.cc/tutorials/uno-q/user-manual/#linux-host-setup-required-for-linux-users) section in the UNO Q User Manual to install the necessary `udev` rules._**

## Board Modes

The board can be used in **three different modes:**

*   **Over USB (desktop mode)** - the board is connected to a personal computer (Windows / Mac / Linux), and is programmed using the Arduino App Lab desktop application.
*   **Over local Wi-Fi® network (network mode)1** - using this mode, a connection with the board is established over the local network (over Wi-Fi®), using SSH 2.
*   **Using board as an Single Board Computer (SBC mode)** - by connecting a USB dongle with a monitor, keyboard & mouse connected, the UNO Q can be used as an SBC.

**_1 Network mode only works once the first setup is complete. After the first setup, when launching the Arduino App Lab, select the "Network" mode._**

**_2 The computer connecting to the board needs to be connected to the same local network._**

### Desktop Mode Over USB (Default)

To program your board over using **desktop mode**, follow the instructions below:

1.   Connect the board to your computer, using a USB-C® cable.

2.   Open the Arduino App Lab, wait for the board to appear 3, and select the **USB** option.

![Image 5: Desktop mode](https://docs.arduino.cc/static/ba053d477049d1b5200ae7497f51312e/a6d36/usb-mode.png)

Desktop mode

3.   You are ready to create and run Apps on your board✅.

**_3 The board takes some time to boot. If the animation on the LED matrix is still running, it is still booting._**

### Network Mode (Over Local Wi-Fi® Network)

To program your board using **network mode**, follow the instructions below:

1.   Make sure the board is setup (this is done by connecting the board over USB, see above instructions).

2.   Open the Arduino App Lab, wait for the board to appear, and select the **network** option.

![Image 6: Network mode](https://docs.arduino.cc/static/8adebd1065a40b9832542a27a8566267/a6d36/network-mode.png)

Network mode

3.   You are ready to create and run Apps on your board✅.

**_Network mode makes it possible to develop and run Apps on the board, without it being connected to a computer._**

**_Note: if you change Wi-Fi® networks, the board will need to be connected again via USB, where you will be prompted again to connect to a new network. The board will then automatically connect to any network previously configured._**

### SBC Mode (Standalone)

**_This mode requires a USB dongle with HDMI and external power delivery support._**

To program your board using **SBC mode**, follow the instructions below:

1.   Connect a USB dongle to the board's USB-C® port.

2.   Connect a monitor (via HDMI), keyboard and mouse to the USB dongle.

3.   Power the USB dongle using a +5 VDC - 3 A power source (e.g. a phone charger).

4.   The complete setup should look like this:

![Image 7: SBC setup](https://docs.arduino.cc/static/393aab342f7ccc542415e0446c555239/a6d36/sbc.png)

SBC setup

5.   Wait for the board to boot. Once it is booted, a login screen will appear on the monitor.

6.   Log in using the credentials

`arduino` as a username, and create a custom password for the board.
7.   Once logged in, the Arduino App Lab will automatically launch and look for updates. Once the update is finished, you are ready to create and run Apps on your board ✅.

![Image 8: Arduino App Lab in SBC mode](https://docs.arduino.cc/static/5e4b0eda620f77aad494075bcaa48f4b/a6d36/app-lab-sbc.png)

Arduino App Lab in SBC mode

## Arduino App Lab UI Overview

The Arduino App Lab is designed as an editor and resource manager for creating & launching Apps.

![Image 9: Arduino App Lab - Overview](https://docs.arduino.cc/static/a4690d2eb0020514844b359f5568a2ab/a6d36/app-overview.png)

Arduino App Lab - Overview

*   **My Apps** - created / duplicated Apps appear here. Click into each App to edit and run them.
*   **Examples** - examples made by the Arduino® team, including audio classification, video object detection and GPIO control.
*   **Bricks** - the modular code building blocks that is used to create advanced Apps easily.
*   **Learn** - built-in documentation for learning about Arduino App Lab features.

### What are Apps?

The Arduino App Lab is designed around **Apps** that will run on the [UNO Q](https://store.arduino.cc/products/uno-q) board. The UNO Q is a board unlike any other Arduino board, featuring a microprocessor capable of running Debian OS (a Linux distribution), and a microcontroller that runs sketch files. These systems can then communicate using a tool called [Bridge](https://docs.arduino.cc/software/app-lab/tutorials/getting-started/#bridge-tool).

Apps are a composition of various configuration and application files:

*   A **Python® file** running on the Linux system.
*   A **sketch file** running on the microcontroller.
*   Or **both a Python® file and sketch file**, talking to each other (this is the most common example).

Below is an example of the **Home Climate Monitoring** App, which records data from a Modulino® and streams it to a web server hosting a web application.

![Image 10: Home Climate Monitoring example App](https://docs.arduino.cc/static/ed2f8e8e9e528aa5618bf1c176dbb05b/a6d36/climate-monitoring.png)

Home Climate Monitoring example App

Apps can be created directly from a large set of pre-made examples, or you can create your own from scratch. Examples are accessible in the side menu, under **"Examples"**, which provides in-app documentation on how to connect any additional hardware, how to use the example, and how to understand the code setup. All examples can be duplicated and modified 4.

To create your own App, navigate to the **"Apps"** tab, and click on the **"Create new app +"** button.

**_4 To duplicate an example, navigate to an example, click on the arrow next to the name, and select "Duplicate Example". Some examples such as the "Blinking LED from Arduino Cloud" may require additional setup, such as adding API keys._**

### What are Bricks?

![Image 11: Arduino App Lab - Bricks](https://docs.arduino.cc/static/e29e75a12e6fdef4e390b576a3275b10/a6d36/bricks.png)

Arduino App Lab - Bricks

[Bricks](https://docs.arduino.cc/software/app-lab/tutorials/bricks/), unlike Apps, can best be likened to a software library that has pre-packaged functionalities, such as AI models, web server or specific HTTP requests that will make developing code easier. However Bricks are unique as they do not just import code, they are designed to launch in parallel with Apps.

There are a number of different categories, for example:

*   An object detection model trained on a specific set of images
*   Pre-packaged code for connecting to an external API (such as weather forecast)
*   A web server that hosts a web application

Bricks containing AI models are deployed alongside the App as a [docker](https://www.docker.com/) container, and there may be several containers running simultaneously.

The Arduino App Lab has a number of Bricks that can be installed and used directly. These are available in the side menu under **"Bricks"**, and are frequently being updated.

**_The API documentation for each Brick can be accessed in the "Bricks" tab inside the Arduino App Lab._**

### App Files

An App is contained inside a directory with multiple sub-directories. A typical App looks something like this:

![Image 12: Edit Apps](https://docs.arduino.cc/static/aea108322ae2c16d22b48281d0bbf38f/a6d36/edit-apps.png)

Edit Apps

There are three main files, each contained in a separate folder:

*   `sketch.ino` - hosts all the code for the **microcontroller**, written in the Arduino programming language (C++)
*   `main.py` - main entry point for the **Linux system**, running on the microprocessor, written in Python®.
*   `app.yaml` - contains metadata for an application, such as name, description and _Bricks_ used. This file **cannot be edited**.

There are other files such as the

`README.md`, storing the documentation for the App, and additional files that may be part of a particular example.
## Create & Run Apps

![Image 13: Arduino App Lab - Apps](https://docs.arduino.cc/static/2d9702a8671c9d2da32a315bc6bd7572/a6d36/app-examples.png)

Arduino App Lab - Apps

To run an App, you can either start from scratch, or choose an **existing example**. For first-time users, we recommend using an existing example for a better understanding of the structure.

### Run Example Apps

To run an example App, follow the steps below:

1.   Select the example you want to run on your UNO Q board from the **"Example"** tab, located in the left side menu.
2.   Click on the **"Run"** button in the top right corner.
3.   Wait for the loading process to finish.
4.   Once start-up is complete, you can start interacting with the App.

![Image 14: Launching an app.](https://docs.arduino.cc/static/59094559f71c46cf5b5615ab43ce4c81/a6d36/launch-app.png)

Launching an app.

Each official example provides a detailed documentation provided in the

`readme.md` file inside of the example App.
**_Note that every time an App is launched, the sketch is compiled, and the Python® application is launched. Depending on the complexity of the application, this process may take up to a minute._**

### How do I know my App is Running?

Once an App is launched, the status of the App is available in the **Console**. There are three tabs available:

*   **Start-up** - outputs the logs from the start-up process. Here you will find information regarding compilation for the microcontroller and deployment of the Python® application on the Linux system.
*   **Main (Python®)** - view the logs from the Python® application (`print()`)
*   **Sketch (Microcontroller)** – view data sent from the sketch using `Monitor.print()`. 

**Note:**

`Serial.println()` outputs data over UART and is not shown in the App Lab Console. To display messages in the Console, use `Monitor.print()`. Learn more in [From Serial to Monitor](https://docs.arduino.cc/tutorials/uno-q/user-manual/#from-serial-to-monitor)![Image 15: App logs](https://docs.arduino.cc/static/e05847b6a42ea7462c2beaeb971e156f/a6d36/app-logs.png)

App logs

**_Please note that while an App may successfully launch, it does not mean it is working properly. The Python® script may have issues, and this can be seen in the Python log. However, if an error occurs during the sketch compilation, the launch will be aborted._**

### Create a New App

To create a new App, click on the **"Create New App"** on the main page.

When creating a new App from scratch, the

`sketch.ino` and `main.py` will be automatically created with the minimum necessary code required to launch the app, while Bricks will need to be imported manually.
To add a Brick, click on the **"Add Bricks"** button, and select the Brick you'd like to use. The Brick can now be used in your

`main.py` file.
### Duplicate an Existing Example

Instead of creating a new App from scratch, an example can also be **duplicated**. This is done by selecting an available example in the **"Examples"** section, and duplicate it:

![Image 16: Duplicating an example](https://docs.arduino.cc/static/8af53032423af5d2dd0ae95fd92ae526/a6d36/cloud-blink-duplicate.png)

Duplicating an example

## How Apps Function

Only one App at a time can run on a board simultaneously, but an App may have several Bricks running in the background. Bricks are deployed as separate processes that run on the board, which the App can interface with using specific APIs.

For example, an App may have the following running at the same time:

*   An AI model, for classifying incoming data (e.g. audio, camera, sensor data)
*   A web server, that displays the data
*   A Brick connecting to a Web API

These processes are run in parallel, which makes Apps a very versatile component when creating complex projects.

### App Run

When creating an App, it is important to always import and use the

`App` class, particularly the `run()` function.

`1# Launches the App, along with any imported Bricks2App.run()`

It is important that

`App.run()` is placed at the end of the `main.py` file, as this will launch any imported Bricks & utilities (such as Bridge). Any code placed after this will not function properly.
### Bridge Tool

One of the most important tools when developing Apps is the **Bridge** tool. The Bridge tool makes it possible to communicate between the Microcontroller and Linux system, through an easy-to-use API with three core functionalities:

*   **Provide** - a service is _provided_ that can be _called_ upon.
*   **Call** - we _call_ a service that is _provided_.
*   **Notify** - we _notify_ the other side with some parameters (a one way push of data)

In simple terms, if you want to send data from the microcontroller to the Linux system, we would implement a provider function that we can then call from the Linux system, or use the notify function to push data from one system to the other.

Here's a very quick example, demonstrating sending data from the sketch to the Python® application.

**Sketch:**

`1int data = 1;2Bridge.notify("python_function", data);`

**Python®:**

`1Bridge.provide("python_function", python_function)2def python_function(data: int)3    print(data)`

## Summary

The Arduino App Lab is a versatile editor, used for programming both Python & Sketch applications on the UNO Q board. It includes a large variety of examples for quickly getting started, and several Bricks that makes the development experience easier.

In this guide, we have covered some of the most important aspects of the editor, such as:

*   How to install & set up a board for the first time.
*   What _Apps_ are, and what are they made of.
*   What _Bricks_ are, and how they function
*   What _Bridge_ is, and how it makes the MPU & MCU communicate over RPC.

More documentation for the Arduino App Lab is available at:

*   [Arduino App Lab Documentation](https://docs.arduino.cc/software/app-lab/)

You can also visit the [Arduino® UNO Q](https://docs.arduino.cc/hardware/uno-q) hardware page for details on the board.



---

## Source: https://docs.arduino.cc/software/app-lab/tutorials/bricks/

Title: Understanding Bricks: Building Blocks in the Arduino App Lab | Arduino Documentation

URL Source: https://docs.arduino.cc/software/app-lab/tutorials/bricks/

Markdown Content:
Bricks are **code building blocks** that are used to build [Apps](https://docs.arduino.cc/software/app-lab/tutorials/getting-started/) in the [Arduino App Lab](https://docs.arduino.cc/software/app-lab). Bricks have a wide area of usage, some embed AI models while other Bricks are used to host web applications or connecting to external web APIs.

They are designed to make it easier to build complex Apps, such as embedding **computer vision**, by abstracting the code and exposing easy-to-use APIs that can be used in an App. An App may have a number of Bricks, which may include:

*   AI models, e.g. for object detection or image recognition
*   A web UI builder, for hosting web interfaces for interacting or showing data from our board
*   A REST API handler, that can return weather data through a single command

In this guide, we will explore how Bricks work, how they are used in Apps, and the different Bricks available.

**_The API documentation for each Brick can be accessed in the "Bricks" tab inside the Arduino App Lab._**

## Hardware & Software Requirements

### Hardware

*   [Arduino® UNO Q board](https://store.arduino.cc/products/uno-q)
*   USB-C® cable

### Software

*   [Arduino App Lab](https://www.arduino.cc/en/uno-q/)

## Understanding the Brick Concept

![Image 1: Motion detection example](https://docs.arduino.cc/static/75a33602f9eaea2f7f7ce68e8a65301a/a6d36/motion-detection.png)

Motion detection example

Bricks are code packages that are imported into an App, and launched as a separate process on the Linux system. Bricks are written in **Python**. When launching an App on the UNO Q, the Bricks are deployed on the board, and may be using [docker](https://www.docker.com/) containers that can be interfaced with from the main application through an easy-to-use API.

Bricks are first added in the UI, by clicking on the button (seen in the image below), and selecting the Brick we want to use inside our App.

![Image 2: Importing a Brick.](https://docs.arduino.cc/static/c4ba129c26c39fd5f37d2dfed7fee780/a6d36/add-brick-1.png)

Importing a Brick.

![Image 3: Importing a Brick.](https://docs.arduino.cc/static/9634172e298c5e8202cb098004b4e6da/a6d36/add-brick-2.png)

Importing a Brick.

Adding a Brick will also update the

`app.yaml` file:

`1bricks:2    - arduino:web_ui3    - arduino:motion_detection`

**_Do not manually edit the `bricks` entry inside the `app.yaml` file._**

After adding the Brick to the App, it also needs to be imported in the

`main.py` file that is located inside the `python` folder of your App. Below is an example:

`1from arduino.app_bricks.web_ui import WebUI2from arduino.app_bricks.motion_detection import MotionDetection`

*   In the above example, `WebUI` and `MotionDetection` classes are imported from the `web_ui` and `motion_detection` Bricks. 

To access the Brick's functionality, we would use:

`1motion_detection = MotionDetection(confidence=CONFIDENCE)2web_ui = WebUI()`

**_To get a better understanding of what each Brick does, see the "Bricks" section in the Arduino App Lab._**

### Brick Class Example

Other Bricks are more advanced, such as the

`objectdetection` Brick. This Brick can detect objects within an image and return class labels, and confidence scores using the **YoloX Nano** model.

```
1object_detection = ObjectDetection()2frame = os.read("path/to/your/image.jpg")3
4out = object_detection.detect(frame)5obj_det = out["detection"][0]6detected_object = obj_det.get("class_name", None)
```

Inside the Brick, the

`detect` method looks like this:

```
1def detect(self, image_bytes, image_type: str = "jpg", confidence :float = None) -> dict:2        """Process an image to detect objects.3
4        Args:5            image_bytes: can be raw bytes or PIL image.6            image_type: type of image (jpg, jpeg, png). Default is jpg.7            confidence: confidence level for detection. Default is None (use module defaults).8        """9        if not image_bytes or not image_type:10            return None11        ret = super().infer_from_image(image_bytes, image_type)12        return self._extract_detection(ret, confidence)
```

## What Bricks are Available?

There are many Bricks available to choose from. The Bricks are divided into the following categories:

*   AI - Audio
*   AI - Computer Vision
*   AI - Sensor data
*   API
*   IoT
*   Storage
*   Web User Interface

To view the full list of Bricks, navigate to the **"Bricks"** tab in the Arduino App Lab. The description, usage, API documentation and linked examples are also available in this section.

### Brick Types

Bricks vary in level of implementation, where some Bricks work similarly to a Python® module, others use **Docker** to launch a container on the board. Deploying Bricks is handled automatically by the Arduino App Lab.

Some Bricks, such as the

`web_ui`, use a folder called `assets` inside of an App, where HTML/CSS/JS files can be configured to interface with the Python application via web sockets. This particular Brick also launches its web applications at `http://localhost:7000`, which can be accessed by other devices on the same network, using the `<board-name>.local:7000` address.
> The board name is visible at the bottom of the Arduino App Lab, and is the name we set during the first setup.

### Bricks with AI Models

Bricks embedding an AI model uses a Docker container to launch the Brick, which is called from the main Python® application. These Bricks use a default model that is pre-configured.

Bricks using AI models are deployed using a [Docker](https://www.docker.com/) container. This spawns a separate process running on the board, which can be interfaced with through APIs from the Python® application.

This can be detected during the **start-up** of an App, by checking the logs.

`1# Container for Brick started2Container local-share-arduino-app-cli-examples-real-time-accelerometer-ei-motion-detection-runner-1  Started3# Container for App started4Container local-share-arduino-app-cli-examples-real-time-accelerometer-main-1  Started`

#### Docker Status

It is possible to see the status of a Docker container by running

`docker ps` in the board's terminal. To access the terminal, we can either:
*   Open the terminal in [Single Board Computer (SBC)](https://docs.arduino.cc/tutorials/uno-q/single-board-computer) mode and run `docker ps`
*   Access the board's shell via `adb` (with the board connected via USB).

Running the command provides information regarding the container, and if an issue occurred during or after the launch of an App, it is possible to see if it is running or not.

The output from running a command looks like this:

`1CONTAINER ID   IMAGE                                                      COMMAND                  CREATED        STATUS         PORTS                                       NAMES29d194a4f6867   public.ecr.aws/arduino/app-bricks/python-apps-base:0.3.1   "/run.sh"                41 hours ago   Up 6 minutes   0.0.0.0:7000->7000/tcp, :::7000->7000/tcp   local-share-arduino-app-cli-examples-real-time-accelerometer-main-1303c2f2fa2b4b   public.ecr.aws/arduino/app-bricks/ei-models-runner:0.3.2   "node /app/linux/nod…"   41 hours ago   Up 6 minutes   127.0.0.1:1337->1337/tcp                    local-share-arduino-app-cli-examples-real-time-accelerometer-ei-motion-detection-runner-1`

If an App or Brick has not launched properly, we may see:

`1CONTAINER ID   IMAGE                                                      COMMAND                  CREATED        STATUS         PORTS                                       NAMES`

## Summary

Bricks are fundamental to developing Apps for the UNO Q board. In this guide, we have learned that:

*   Bricks are code building blocks that makes it easier to build Apps
*   Some Bricks may include the use of an AI model
*   Some Bricks may help build an accessible web interface over the local network

More documentation for the Arduino App Lab is available at:

*   [Arduino App Lab Documentation](https://docs.arduino.cc/software/app-lab/)

You can also visit the [Arduino® UNO Q](https://docs.arduino.cc/hardware/uno-q) hardware page for details on the board.



---

## Source: https://docs.arduino.cc/software/app-lab/tutorials/cli/

Title: Arduino App CLI: Manage Apps from the Command Line | Arduino Documentation

URL Source: https://docs.arduino.cc/software/app-lab/tutorials/cli/

Markdown Content:
Learn how to use the Arduino App Lab CLI, the command line interface for launching Apps on the UNO Q board.

The Arduino App Lab is built on top of the

`arduino-app-cli` tool, a command line tool that manages Apps made for the [Arduino UNO Q](https://store.arduino.cc/products/uno-q) board.
The

`arduino-app-cli` is pre-installed on the UNO Q board and can be accessed either through using the terminal on the board itself, or by accessing the board's terminal from a host computer via Android Debug Bridge (ADB).
## Requirements

The following hardware is required:

*   [Arduino UNO Q](https://store.arduino.cc/products/uno-q)
*   [USB-C® type cable](https://store.arduino.cc/products/usb-cable2in1-type-c)

To access the board via

`adb` (over USB), you will also need to have the following software installed:
*   [Android Debug Bridge](https://developer.android.com/tools/releases/platform-tools)

You can also access the board via SSH, which is typically installed on your system by default.

## Connect via ADB

**_To learn more about setting up `adb`, check out the [Connect to UNO Q via ADB](https://docs.arduino.cc/tutorials/uno-q/adb/) tutorial. This guide will walk you through the installation steps._**

1.   Connect the UNO Q board to your computer via USB-C.

2.   Run

`adb devices` in the terminal. This should list the connected devices.![Image 1: Connected devices](https://docs.arduino.cc/static/3539f1152db188f36d4b0c1460905bd4/a6d36/connected-devices.png)

Connected devices

> Note that it may take up to a minute for the device to appear after connecting it.

1.   Run

`adb shell`. 
2.   You should now be inside your board's terminal.

![Image 2: Terminal on the board.](https://docs.arduino.cc/static/1ff569c222a5d6530fee3b21dd66e495/a6d36/board-terminal.png)

Terminal on the board.

3.   You are now able to run commands via the terminal on your board! To exit from the terminal, simply type

`exit`.

> Note: If you have not set up your board prior to this via the Arduino App Lab, the first time you run a command that requires authentication (such as
> 
> `sudo`), you will be prompted to create a new password.

## Connect via SSH

**_Note: to use SSH, the [first setup](https://docs.arduino.cc/software/app-lab/tutorials/getting-started#install--set-up-arduino-app-lab) needs to be completed. This is done by connecting your board via USB, open the Arduino App Lab, and select the USB option. Here you will need to give your board a name, a new password as well as providing Wi-Fi® credentials. SSH will be automatically configured during this setup._**

1.   Open a terminal on your machine.
2.   Run `ssh arduino@<boardname>.local`
3.   Provide the password for the board.
4.   We can now interact with the board's shell remotely! ✅

![Image 3: Connect via SSH](https://docs.arduino.cc/static/66329408af0db4d2890646f3734a961e/a6d36/ssh-macos.png)

Connect via SSH

*   A more detailed tutorial on connecting to the UNO Q via SSH is available [here](https://docs.arduino.cc/tutorials/uno-q/ssh).

## Using Arduino App CLI

With the

`arduino-app-cli` tool, you can for example:
*   start/stop Apps
*   list running Apps
*   create new Apps
*   show logs of an App
*   monitor an App

To get a full understanding of available commands, type

`arduino-app-cli` in the terminal.
### Create an App

To manage Apps, we use the

`app` command. 
To create an app, we can use:

`1arduino-app-cli app new "test"`

This will create an App at

`/home/arduino/ArduinoApps/test`, with the configuration files as well as sketch & Python® folder.
### Edit an App

If you are using the board with a monitor, keyboard & mouse, you can open the files in a code editor, such as _Vim_, _gedit_ or _Sublime_.

If you are accessing the board via

`adb`, you can **pull** and **push** the files/folder from your host computer.
To pull the file, use:

`1adb pull /home/arduino/ArduinoApps /path/to/localfolder`

And to push it, use:

`1adb push /path/to/localfolder /home/arduino/ArduinoApps`

> Note: you may need to give permission rights to the
> 
> `ArduinoApps`folder. This can be done by running `adb shell chown -R arduino:arduino /home/arduino/ArduinoApps`.

### Start & Stop Apps

Once an App is created and edited, it can be launched through the following command:

`1arduino-app-cli app start "/home/arduino/ArduinoApps/test"`

This will launch the App on your UNO Q board.

To stop the App, use:

`1arduino-app-cli app stop "/home/arduino/ArduinoApps/test"`

### Read App Logs

To monitor the logs of a running App, use the

`logs` command:

`1arduino-app-cli app logs /home/arduino/ArduinoApps/test --all`

This will list the logs of the App:

![Image 4: View the logs of an App.](https://docs.arduino.cc/static/8197c7684de087d01b2086d3217ae011/a6d36/app-logs.png)

View the logs of an App.

## Running Examples & User Apps

To run built-in examples and Apps that we create, we can use the

`user` and `examples` shortcut (instead of specifying path).

```
1# run your own app2arduino-app-cli app start user:my-app 3
4# run an example app (e.g. blink)5arduino-app-cli app start examples:blink
```

### List Apps

To list available Apps, use the

`app list` command.

`1arduino-app-cli app list`

This will list all available Apps (including examples), and their status:

![Image 5: List Apps.](https://docs.arduino.cc/static/b8752ee8ae942ee03e3d452945ef4b95/a6d36/list-apps.png)

List Apps.

## System Configuration and Updates

The

`system` command allows you to manage system configurations and updates on your board.
To check for updates, run:

`1arduino-app-cli system update`

This will prompt you to install any available updates.

To set the board name, use:

`1arduino-app-cli system set-name "my-board"`

This will change the name of the board, which will take effect after resetting the board.

To enable or disable the network mode, use:

`1arduino-app-cli system network enable/disable`

Network mode will enable SSH and allows clients to connect to the board over a local network.

Finally, you can gain back some storage space by cleaning up unused containers and images by running:

`1arduino-app-cli system cleanup`

## Bricks

Currently, it is only possible to list available Bricks and specific details for each Brick.

This is done by running:

`1# List out Bricks installed on the board2arduino-app-cli brick list3# Details for a specific Brick4arduino-app-cli brick details arduino:<brick>`

Which will show something akin to:

![Image 6: List Bricks](https://docs.arduino.cc/static/8aaa0a53a418a199cdf5ceedb20c31a7/a6d36/list-bricks.png)

List Bricks

## Summary

This article covers some important commands & usage of the

`arduino-app-cli`, which allows you to manage Apps on the UNO Q without the desktop UI.
More documentation for the Arduino App Lab is available at:

*   [Arduino App Lab Documentation](https://docs.arduino.cc/software/app-lab/)

You can also visit the [Arduino® UNO Q](https://docs.arduino.cc/hardware/uno-q) hardware page for details on the board.



---

## Source: https://docs.arduino.cc/software/app-lab/tutorials/examples/

Title: Arduino App Lab Example Applications Overview | Arduino Documentation

URL Source: https://docs.arduino.cc/software/app-lab/tutorials/examples/

Markdown Content:
An overview of various applications developed for the Arduino App Lab platform, showcasing unique functionalities from environmental monitoring to machine learning.

## Overview

This article provides a comprehensive overview of various applications developed for Arduino App Lab. Each application showcases unique functionalities, from environmental monitoring to machine learning, leveraging the capabilities of the Arduino ecosystem. Below is a summary of each example, detailing the App's purpose, functionality, and components used.

## Requirements

*   [Arduino® UNO Q](https://store.arduino.cc/products/uno-q)
*   [USB-C® cable](https://store.arduino.cc/products/usb-c-to-hdmi-multiport-adapter-with-ethernet-and-usb-hub)

## Examples Without Additional Hardware

### Air Quality Monitoring App

![Image 1: Air Quality Monitoring App](https://docs.arduino.cc/static/7e543ff68a2962354817121667ff4937/a6d36/air-quality-monitoring-app-hero.png)

Air Quality Monitoring App

The **Air Quality Monitoring App** displays real-time air quality data using the AQICN service on an 8x13 LED matrix. It visually represents air quality levels with animated emoji patterns, ranging from "Good" to "Hazardous."

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/air-quality-monitoring)

#### How it Works

*   **Data Fetching:** The app retrieves air quality data from the AQICN API for a specified city.
*   **Visualization:** Numeric AQI values are converted into visual patterns displayed on the LED matrix.
*   **Communication:** The Python® script handles API communication, while the Arduino sketch manages the LED display.

#### Bricks Used

*   **None:** Direct communication between Python® and Arduino is facilitated through the Router Bridge.

### Bedtime Story Teller

![Image 2: Bedtime Story Teller Example](https://docs.arduino.cc/static/5ace96b2d07973b3a186142675b5a4dc/a6d36/bedtime-storyteller.png)

Bedtime Story Teller Example

The **Bedtime Story Teller** example demonstrates how to build a generative AI application using the Arduino UNO Q. It uses a Large Language Model (LLM) to create personalized bedtime stories based on user-selected parameters such as age, theme, and characters, streaming the results in real time to a web interface.

**Note:** This example requires a valid API Key from an LLM provider (Google Gemini, OpenAI GPT, or Anthropic Claude).

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/bedtime-story-teller)

#### How it Works

*   **User Input Collection:** The web interface collects story parameters (age, theme, tone) or triggers a random generation.
*   **AI Inference:** The backend constructs a prompt and sends it to the cloud provider via the `cloud_llm` Brick.
*   **Stream Processing:** The story is streamed back to the browser text-token by text-token for immediate feedback.

#### Bricks Used

*   **cloud_llm:** Brick to interact with cloud-based Large Language Models.
*   **web_ui:** Brick to create the web interface for parameter input and story display.

### Blink LED

![Image 3: Blink LED](https://docs.arduino.cc/static/88ed9e000e09cc8366e9712d7f542d6e/a6d36/blink-led-hero.png)

Blink LED

The **Blink** example toggles the onboard LED state every second, illustrating basic LED control and Router Bridge communication.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/blink)

#### How it Works

*   **Timing Control:** A Python® script manages the timing and state logic for the LED.
*   **LED Control:** The Arduino sketch handles the hardware control.

#### Bricks Used

*   **None:** Direct communication via Router Bridge.

### Blinking LED from Arduino Cloud

![Image 4: Blinking LED from Arduino Cloud](https://docs.arduino.cc/static/21b45bd8b1d8f91d4a4cc128497e9354/a6d36/blinking-led-from-arduino-cloud-hero.png)

Blinking LED from Arduino Cloud

This example allows remote control of the onboard LED from the Arduino Cloud using a dashboard with a switch.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/cloud-blink)

#### How it Works

*   **Cloud Integration:** The `arduino_cloud` Brick connects the device to the Arduino Cloud.
*   **LED Control:** Changes in the cloud dashboard update the LED state.

#### Bricks Used

*   **arduino_cloud:** Brick to create a connection to the Arduino Cloud.

### Concrete Crack Detector

![Image 5: Concrete Crack Detector](https://docs.arduino.cc/static/69c07481d6a39d8d25bef5922af16e35/a6d36/concrete-crack-detector-hero.png)

Concrete Crack Detector

The **Concrete Crack Detector** uses a pre-trained machine learning model to identify cracks in concrete surfaces. It provides a web interface for image upload and displays results with highlighted crack locations.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/anomaly-detection)

#### How it Works

*   **Image Analysis:** The `VisualAnomalyDetection` Brick processes images to detect structural anomalies.
*   **Web Interface:** Users can upload images or select samples, adjust detection sensitivity, and view results.

#### Bricks Used

*   **visual_anomaly_detection:** Brick to detect cracks and structural defects in concrete surfaces using computer vision and machine learning.
*   **web_ui:** Brick to create a web interface with image upload capabilities, confidence controls, and real-time result visualization.

### Glass Breaking Sensor

![Image 6: Glass Breaking Sensor](https://docs.arduino.cc/static/bbb494cdd0e7529943ebb9ba7014874d/a6d36/glass-breaking-sensor-hero.png)

Glass Breaking Sensor

The **Glass Breaking Sensor** classifies audio files to detect glass breaking sounds using a machine learning model. It features a web interface for audio upload and real-time classification results.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/audio-classification)

#### How it Works

*   **Audio Classification:** The `audio_classification` Brick analyzes audio files for specific sound patterns.
*   **Web Interface:** Supports audio file upload and displays classification results with confidence scores.

#### Bricks Used

*   **audio_classification:** Brick to classify audio files using a pre-trained model for sound detection and analysis.
*   **web_ui:** Brick to create a web interface with audio upload capabilities, confidence controls, and real-time result display.

### Image Classification

![Image 7: Image Classification](https://docs.arduino.cc/static/69538269f4947fea3f16c79308c0a966/a6d36/image-classification-hero.png)

Image Classification

The **Image Classification** example lets you perform image classification using a pre-trained neural network model. It features a web-based interface that allows you to upload images for classification, set the confidence threshold and see the inference results.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/image-classification)

#### How it Works

*   **Image Classification:** The `image_classification` Brick classifies objects within an image file.
*   **Web Interface:** Supports image file upload and displays classification results with confidence scores.

#### Bricks Used

*   **image_classification:** Brick to classify objects within an image. 
*   **web_ui:** Brick to create a web interface to display the image classification dashboard.

### Linux® Blink with UI (JavaScript)

![Image 8: Linux® Blink with UI (JavaScript)](https://docs.arduino.cc/static/b907c873512e90d6896f809f4670fa44/a6d36/linux-blink-with-ui-javascript-hero.png)

Linux® Blink with UI (JavaScript)

The **Linux® Blink** example toggles an LED state on the board through a web-based interface, demonstrating basic event handling and UI updates.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/blink-with-ui)

#### How it Works

*   **Web Interface:** A toggle switch controls the LED state via WebSocket communication.
*   **LED Control:** The Arduino sketch manages the LED hardware.

#### Bricks Used

*   **web_ui:** Brick to create a web interface to display the LED control toggle switch.

### Mascot Jump Game

![Image 9: Mascot Jump Game Example](https://docs.arduino.cc/static/ae4e5c536977c25a45db66fd67963650/a6d36/mascot-jump-game.png)

Mascot Jump Game Example

The **Mascot Jump Game** is an endless runner game inspired by the classic browser dinosaur game. It features an LED character jumping over electronic components, synchronized between the web browser and the UNO Q's LED matrix.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/mascot-jump-game)

#### How it Works

*   **Game Physics:** The backend runs the physics engine and collision detection at 60 FPS.
*   **Synchronization:** The web interface renders the game while the UNO Q simultaneously displays matching animations (running, jumping, game over) on the LED matrix.
*   **Progressive Difficulty:** The game speed increases as the score grows.

#### Bricks Used

*   **web_ui:** Brick to create a web interface with real-time communication for game state updates and input handling.

### Object Detection

![Image 10: Object Detection](https://docs.arduino.cc/static/18ba7eec535f17d8233b0dca01f5df0d/a6d36/object-detection-hero.png)

Object Detection

The **Object Detection** example lets you perform object detection using a pre-trained machine learning model. It shows how to process input images, run inference, and visualize detected objects with bounding boxes and labels.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/object-detection)

#### How it Works

*   **Object Detection:** The `object_detection` Brick to locate and classify objects within an image file.
*   **Web Interface:** Supports image file upload and displays classification results with confidence scores.

#### Bricks Used

*   **object_detection:** Brick to identify objects within an image.
*   **web_ui:** Brick to create a web interface.

### System Resources Logger

![Image 11: System Resources Logger](https://docs.arduino.cc/static/713fa2cd74852195c6cfa2de0fbceb39/a6d36/system-resources-logger-hero.png)

System Resources Logger

The **System Resources Logger** monitors and displays real-time system performance data from your Arduino UNO Q board.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/system-resources-logger)

#### How it Works

*   **Data Collection:** Uses the `psutil` library to gather CPU and memory usage statistics every 5 seconds.
*   **Data Storage:** The `dbstorage_tsstore` Brick stores performance metrics with timestamp.
*   **Web Interface:** Provides interactive visualization with real-time updates via WebSocket communication.

#### Bricks Used

*   **dbstorage_tsstore:** Brick to store CPU and memory usage data in a time series database with retention and aggregation capability.
*   **web_ui:** Brick to create a web interface with real-time charts and historical data visualization.

### UNO Q Pin Toggle

![Image 12: UNO Q Pin Toggle](https://docs.arduino.cc/static/5abd79703348bb7b61e05beef1e10b4c/a6d36/uno-q-pin-toggle-hero.png)

UNO Q Pin Toggle

The **UNO Q Pin Toggle** example lets you control the state of every pin of the Arduino UNO Q through an interactive web interface.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/unoq-pin-toggle)

#### How it Works

*   **Web Interface:** Displays the board pins control dashboard with toggle switches.
*   **Pin Control:** The backend processes toggle requests and broadcasts updates.

#### Bricks Used

*   **web_ui:** Brick to create a web interface with the UNO Q illustration and allow real-time pin control.

### Weather Forecast on LED Matrix

![Image 13: Weather Forecast on LED Matrix](https://docs.arduino.cc/static/ace7914b29b2cb4b869df1806b93734a/a6d36/weather-forecast-on-led-matrix-hero.png)

Weather Forecast on LED Matrix

The **Weather Forecasting System** displays real-time weather information from the _open-meteo.com_ service on the Arduino UNO Q LED matrix.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/weather-forecast)

#### How it Works

*   **Weather Data:** The `weather_forecast` Brick fetches data from the _open-meteo.com_ API.
*   **LED Display:** The Arduino sketch manages LED matrix animations based on weather conditions.

#### Bricks Used

*   **weather_forecast:** Brick to fetch weather data from the open-meteo.com API and convert weather codes into simple categories.

## Examples Using Additional Hardware

### Code Detector

![Image 14: Code Detector](https://docs.arduino.cc/static/ba8b0e2bf5335d8cb9600c22522992e1/a6d36/code-detector-hero.png)

Code Detector

The **Code Detector** scans barcodes and QR codes using a USB camera, displaying results on a web interface and storing them in a local database.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/code-detector)

#### Additional Hardware

*   USB camera
*   USB-C® dongle
*   External Power Supply (for powering the dongle)

#### How it Works

*   **Code Detection:** The `camera_code_detection` Brick processes video input for code detection.
*   **Web Interface:** Displays live camera feed and detected codes.

#### Bricks Used

*   **camera_code_detection:** Brick to detect barcodes and QR codes using a camera.
*   **dbstorage_sqlstore:** Brick to store the detected codes in a database.
*   **web_ui:** Brick to create a web interface to display the detected codes and the camera live feed.

### Detect Objects on Camera

![Image 15: Detect Objects on Camera](https://docs.arduino.cc/static/f7de0eaa588f205330778113f32caebf/a6d36/detect-objects-on-camera-hero.png)

Detect Objects on Camera

The **Detect Objects on Camera** example lets you detect objects on a live feed from a USB camera and visualize bounding boxes around the detections in real-time.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/video-generic-object-detection)

#### Additional Hardware

*   USB camera
*   USB-C® dongle
*   External Power Supply (for powering the dongle)

#### How it Works

*   **Video Stream:** Processes frames from a USB camera using the `video_objectdetection` Brick.
*   **Web Interface:** Displays the classification results and model controls.

#### Bricks Used

*   **web_ui:** Brick to create a web interface to display the classification results and model controls.
*   **video_objectdetection:** Brick to classify objects within a live video feed from a camera.

### Face Detector on Camera

![Image 16: Face Detector on Camera](https://docs.arduino.cc/static/c9420200f66e82edf667104382783f14/a6d36/face-detector-on-camera-hero.png)

Face Detector on Camera

The **Face Detector on Camera** example lets you detect faces on a live feed from a USB camera and visualize bounding boxes around the detections in real-time.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/video-face-detection)

#### Additional Hardware

*   USB camera
*   USB-C® dongle
*   External Power Supply (for powering the dongle)

#### How it Works

*   **Video Stream:** Processes frames from a USB camera using the `video_objectdetection` Brick.
*   **Web Interface:** Displays the classification results and model controls.

#### Bricks Used

*   **web_ui:** Brick to create a web interface to display the classification results and model controls.
*   **video_objectdetection:** Brick to classify faces within a live video feed from a camera.

### Hey Arduino!

![Image 17: Hey Arduino!](https://docs.arduino.cc/static/d8b36ff5b2d805ef482fe2e207f6a44e/a6d36/hey-arduino-hero.png)

Hey Arduino!

The **Hey Arduino!** example triggers an LED matrix animation whenever the keyword "Hey Arduino" is detected through a microphone.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/keyword-spotting)

#### Additional Hardware

*   USB microphone (or headset)
*   USB-C® dongle
*   External Power Supply (for powering the dongle)

#### How it Works

*   **Keyword spotting:** Monitors the audio continuously, and when it detects the keyword, it calls the microcontroller to activate an animation on the LED matrix, using the Bridge tool.

#### Bricks Used

*   **keyword_spotting:** this Brick is designed to detect sound patterns, triggering an event in case of a match.

### Home Climate Monitoring

![Image 18: Home Climate Monitoring](https://docs.arduino.cc/static/6b9897ee4b662a4fe8a856e774734940/a6d36/home-climate-monitoring-hero.png)

Home Climate Monitoring

The **Home Climate Monitoring** app records temperature and humidity data from the Modulino® Thermo node, displaying it on a web interface.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/home-climate-monitoring-and-storage)

#### Additional Hardware

*   Modulino® Thermo
*   Qwiic cable

#### How it Works

*   **Data Storage:** The `dbstorage_tsstore` Brick makes it possible to save, read, and manage time-based data.
*   **Web Interface:** Provides interactive visualization with real-time updates via WebSocket communication.

#### Bricks Used

*   **dbstorage_tsstore:** Brick to store sensor data in a time series database with retention and aggregation capability.
*   **web_ui:** For deploying a user interface to display real-time and historical data.

### Real Time Accelerometer Data

![Image 19: Real Time Accelerometer Data](https://docs.arduino.cc/static/75a33602f9eaea2f7f7ce68e8a65301a/a6d36/real-time-accelerometer-data-hero.png)

Real Time Accelerometer Data

The **Real Time Accelerometer Data** example records accelerometer data from the Modulino® Movement node, and streams it to a web interface.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/real-time-accelerometer)

#### Additional Hardware

*   Modulino® Movement
*   Qwiic cable

#### How it Works

*   **Motion Detection:** The `motion_detection` Brick processes accelerometer data to identify specific motion patterns using a pre-trained model.
*   **Web Interface:** Hosts a web server on the board, serving HTML, CSS & JavaScript files.

#### Bricks Used

*   **motion_detection:** For processing accelerometer data and detecting movement patterns using machine learning.
*   **web_ui:** Brick to create a web interface to display the accelerometer data and the detected movements.

### Object Hunting

![Image 20: Object Hunting Game Example](https://docs.arduino.cc/static/320994d9411cd5a021c0d8515f669cc2/a6d36/object-hunting.png)

Object Hunting Game Example

The **Object Hunting** game is an interactive scavenger hunt that uses real-time object detection. Players must locate specific physical objects (e.g., Book, Bottle, Chair) using a USB camera to win the game.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/object-hunting)

#### Additional Hardware

*   USB Webcam
*   USB-C® Hub with external power

#### How it Works

*   **Video Streaming:** The `video_objectdetection` Brick streams video and performs continuous inference using the YoloX Nano model.
*   **Game Logic:** The web interface tracks detected objects against a checklist and triggers a win condition when all items are found.

#### Bricks Used

*   **web_ui:** Brick to create the interactive game interface and handle WebSocket communication.
*   **video_objectdetection:** Brick that manages the USB camera stream and provides real-time detection results.

### Person Classifier on Camera

![Image 21: Person Classifier on Camera](https://docs.arduino.cc/static/295bab0a307c463118b388332a99b2d3/a6d36/person-classifier-on-camera-hero.png)

Person Classifier on Camera

The **Person Classifier** example lets you detect people on a live feed from a camera and visualize the model inference result on a user-friendly web interface.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/video-person-classification)

#### Additional Hardware

*   USB camera
*   USB-C® dongle
*   External Power Supply (for powering the dongle)

#### How it Works

*   **Video Stream:** Processes frames from a USB camera using the `video_imageclassification` Brick.
*   **Web Interface:** Displays the classification results and model controls, triggers a greeting on person detections.

#### Bricks Used

*   **web_ui:** Brick to create a web interface to display the classification results and model controls.
*   **video_imageclassification:** Brick to classify objects within a live video feed from a camera.

### Theremin Simulator

![Image 22: Theremin Simulator](https://docs.arduino.cc/static/b992b6e7d30f185b9faea83d1f3b2529/a6d36/theremin-simulator.png)

Theremin Simulator

The **Theremin Simulator** creates a virtual instrument that generates real-time audio in response to user input. It uses a web interface for pitch and volume control, streaming synthesized audio to a USB device with low latency.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/theremin)

#### Additional Hardware

*   USB Audio Device (Speaker or Wireless Dongle)
*   USB-C® Hub with external power

#### How it Works

*   **User Interaction:** The frontend captures mouse/touch coordinates and sends them to the backend via WebSockets.
*   **Synthesis:** The `wave_generator` Brick applies envelope smoothing and streams the generated sine wave to the USB audio device.

#### Bricks Used

*   **web_ui:** Brick that provides the web interface and a WebSocket channel for real-time control.
*   **wave_generator:** Brick that handles audio synthesis, envelope control, and streaming to the USB audio device.

### Vibration Anomaly Detection

![Image 23: Vibration Monitoring](https://docs.arduino.cc/static/18380d9e7c5b64b9a19626a0c4c28ba6/a6d36/vibration-anomaly.png)

Vibration Monitoring

The **Vibration Anomaly Detection** example monitors the physical condition of machinery (e.g., a fan) in real time. It visualizes raw accelerometer data and allows users to dynamically adjust the sensitivity of anomaly detection.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/vibration-anomaly-detection)

#### Additional Hardware

*   Modulino® Movement
*   Qwiic cable

#### How it Works

*   **Acquisition:** The system reads sensor data and converts it for the detection algorithm.
*   **Detection:** The `vibration_anomaly_detection` Brick analyzes patterns and triggers an event if the vibration exceeds the user-defined threshold.

#### Bricks Used

*   **web_ui:** Brick to create a web interface to display the dashboard.
*   **vibration_anomaly_detection:** Brick that processes accelerometer data to detect irregular vibration patterns.

### Mobile Video Generic Object Detection

![Image 24: Mobile Video Generic Object Detection](https://docs.arduino.cc/static/2685a6ecbc249f9f37a4e357b2840117/a6d36/mobile-video-generic-object-detection.png)

Mobile Video Generic Object Detection

The **Mobile Video Generic Object Detection** example enables real-time object detection on smartphone camera feeds. Stream video from your phone using the Arduino IoT Remote app to your Arduino UNO Q, which processes the video through an AI model and displays bounding boxes around detected objects in a web interface.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/mobile-video-generic-object-detection)

#### How it Works

*   **Mobile Streaming:** The Arduino IoT Remote app streams live video from your smartphone camera to the Arduino UNO Q board over the same network using a secure pairing QR code.
*   **AI Object Detection:** The board processes video frames through an object detection AI model that can recognize 80+ object classes including cats, dogs, cups, and cell phones.
*   **Web Interface:** Displays the live video feed with bounding boxes around detected objects, confidence scores, and allows users to adjust detection thresholds via an interactive slider.
*   **Real-time Results:** The last five detections are displayed with object class, confidence score, and timestamp.

#### Bricks Used

*   **web_ui:** Brick to create the interactive web interface for displaying results, controls, and the pairing QR code.
*   **video_objectdetection:** Brick to process live video frames through an object detection AI model.

### Color Your LEDs

![Image 25: Color Your LEDs](https://docs.arduino.cc/static/8d211d40cea8299d5bf1beba67472e8c/a6d36/color-your-leds.png)

Color Your LEDs

The **Color Your LEDs** example enables interactive control of the four built-in RGB LEDs on the Arduino UNO Q through a web-based interface. It demonstrates managing a hybrid architecture where different LEDs connect to different processors on the board.

[**Example Source Code**](https://github.com/arduino/app-bricks-examples/tree/main/examples/color-your-leds)

#### How it Works

*   **Hybrid Architecture:** LEDs 1-2 connect to the Qualcomm QRB2210 MPU and are controlled via direct API calls, while LEDs 3-4 connect to the STM32U585 MCU and are controlled via RouterBridge communication.
*   **Web Dashboard:** The web interface provides toggle switches for ON/OFF states and color selectors for each LED.
*   **Color Control:** LEDs 1, 2, and 4 offer basic color options, while LED 3 features a full color palette due to PWM capabilities for precise RGB mixing.
*   **Real-time Updates:** Socket.IO connections enable instant LED control responses when users select colors from the browser interface.

#### Bricks Used

*   **web_ui:** Brick to create the interactive color control dashboard accessible via browser.



---

## Source: https://docs.arduino.cc/software/app-lab/tutorials/ai-models/

Title: Custom AI Models for Arduino App Lab | Arduino Documentation

URL Source: https://docs.arduino.cc/software/app-lab/tutorials/ai-models/

Markdown Content:
This tutorial teaches you how to create and train your own AI models to customize your App Bricks.

## Overview

Predefined models offer a powerful starting point for understanding edge AI. In this tutorial, we will extend those capabilities by engineering and deploying our own custom machine learning models. By moving to a custom workflow, we can empower our Arduino App Lab applications to handle specialized tasks and unique datasets, allowing the system to be tailored to our specific project goals.

![Image 1: Custom AI models](https://docs.arduino.cc/static/0f97c0cf164a5d1e4b910cc6da44cf70/a6d36/thumbnail-new.png)

Custom AI models

By training your own models, you gain precise control over classification parameters and performance metrics, ensuring the system meets the specific requirements of your deployed environment rather than relying on generic solutions.

## Goals

*   **Collect** a custom dataset for audio or image-related models.
*   **Train** a model from scratch in Edge Impulse Studio.
*   **Integrate** your custom model into Arduino App Lab to customize your Bricks.

## Required Hardware and Software

### Hardware Requirements

*   [Arduino UNO Q](https://store.arduino.cc/products/uno-q) (x1)
*   USB Camera for image-based AI models
*   USB microphone for audio-based AI models

### Software Requirements

*   [Arduino App Lab](https://www.arduino.cc/en/software/#app-lab-section)
*   Arduino Account (also used for Edge Impulse Studio)

## Machine Learning

To set the context, we need to understand what an "AI Model" actually is.

In the world of traditional programming, we write explicit rules: _If button A is pressed, turn on LED B._ In **machine learning**, we don't write rules; we provide examples. We show the computer 100 photos of a "Banana" and 100 photos of an "Apple," and the computer figures out the rules to tell them apart itself. The result of that learning process is an **AI Model**.

![Image 2: Machine Learning](https://docs.arduino.cc/static/7e63eb1f8f3714bd2dbe48801b8484b0/a6d36/ml.png)

Machine Learning

By creating a custom model, you are essentially creating a new "brain" file that you can swap into your Arduino App Lab Bricks to change their behavior completely.

### Edge Impulse Studio

To create these custom models, we use **Edge Impulse Studio**.

![Image 3: Edge Impulse Studio](https://docs.arduino.cc/static/85aeea79882b8696585f8043d53c7acd/a6d36/edge-impulse.png)

Edge Impulse Studio

Edge Impulse is the leading development platform for embedded machine learning. Think of it as a "lab" where we prepare our AI. It handles the entire pipeline required to build a model that can run on the UNO Q.

#### The Workflow

Instead of writing code to define the neural network, you use the Studio's visual interface to guide the process:

![Image 4: Edge Impulse workflow](https://docs.arduino.cc/static/062d27947366bda71b3d46d1a7c98f85/a6d36/workflow-2.png)

Edge Impulse workflow

1.   **Data Acquisition:** This is the most critical step. You collect/import images or audio samples to Edge Impulse. You can do this by using your mobile phone, your computer, or even capturing data directly from the UNO Q.
2.   **Labeling:** Once your data is uploaded, you must assign a category or "label" to each sample. This step establishes the ground truth for the system, teaching it exactly which patterns correspond to which output class. Accurate and consistent labeling is essential, as it directly dictates what the model learns to recognize.
3.   **Impulse Design:** This is where you structure your "brain." You define an **Input block** (e.g., Audio or Image data), a **Processing block** (to clean up the data), and a **Learning block** (the neural network that learns the patterns).
4.   **Training:** The Studio uses its cloud servers to crunch the numbers. It will look at your data thousands of times until it learns to recognize the keywords or objects you defined.
5.   **Deployment:** Edge Impulse allows us to export the trained model specifically for the **Arduino UNO Q**, and it is imported directly into our Arduino App Lab application.

When you export for the UNO Q, you get an **.eim (Edge Impulse Model)** file. This file acts as a container, holding all the logic and trained parameters needed to run the model.

## Creating your Custom AI Model

*   Inside the Arduino App Lab, navigate to **My Apps** and click on **Create New App**. Give it a name and save it.

*   In your App Python file, update the

`main.py` script by copying and pasting this:```
1from arduino.app_utils import App2from arduino.app_bricks.video_objectdetection import VideoObjectDetection3
4detection_stream = VideoObjectDetection(confidence=0.5, debounce_sec=0.0)5
6# Register a callback for when all objects are detected7def print_detections(detections: dict):8  for key, value in detections.items():9        for detection in value:10            entry = {11                "content": key,12                "confidence": f"{round(detection.get('confidence', 0) * 100)} %"13            }14            print(entry)15
16detection_stream.on_detect_all(print_detections)17
18App.run()
``` 
*   Navigate to the Bricks section in the left Arduino App Lab menu and click on the **Add Brick** button. Select the **Video Object Detection Brick**.

![Image 5: Video Object Detection Brick](https://docs.arduino.cc/static/7c06ab38b27c0c93883ff95e85d2c722/a6d36/app-lab-0.5.png)

Video Object Detection Brick

*   Navigate to the **AI models** tab in the Brick. The interface lists available models for your Brick, showing only the built-in Default models if no new ones have been trained.

![Image 6: AI models Brick option](https://docs.arduino.cc/static/04e13d6c2f9de6f4cb2dfc30b6c5c6c7/a6d36/app-lab-1.png)

AI models Brick option

*   To start training your custom model, click on **Train new AI model** shown in the image above. Then, click on **Ok, let's start**.

![Image 7: Start the Edge Impulse pairing](https://docs.arduino.cc/static/74a3b0fd2c486b3689a0c5e071259601/a6d36/app-lab-2.png)

Start the Edge Impulse pairing

*   If this is your first time, you will be guided through the Arduino account creation or login process.

![Image 8: Login Process](https://docs.arduino.cc/static/c8cf3e074ff8944058a47528e5de62bf/a6d36/app-lab-3.1.png)

Login Process

*   Your same Arduino account will be valid to log into the Edge Impulse Studio.

![Image 9: Connect to Edge Impulse](https://docs.arduino.cc/static/4ea4d6abb975d75a822e46d65d7439fb/a6d36/app-lab-5.png)

Connect to Edge Impulse

*   You will be asked for permission to grant Arduino App Lab to access your Edge Impulse account.

![Image 10: Edge Impulse permission](https://docs.arduino.cc/static/b39076d5937e118b4e6267dd771ead2b/a6d36/app-lab-5.5.png)

Edge Impulse permission

*   With your Arduino account and Edge Impulse now connected, click on the **Start to Train your AI Model** button.

![Image 11: Start to train your AI model](https://docs.arduino.cc/static/ad376483efb4c682cf08cc1292ed73b2/a6d36/app-lab-6.png)

Start to train your AI model

*   Now, you should be redirected to the Edge Impulse Studio.

![Image 12: Edge Impulse Studio](https://docs.arduino.cc/static/01e61db9d6d43a740c20f4bee4b75710/a6d36/app-lab-7.1.png)

Edge Impulse Studio

### Image-Based Models

To create a machine vision model for detecting objects or classifying images, follow the steps below:

#### New Project:

Create your first project by navigating to your profile picture (in the top-right corner) and clicking on **Create new project**. Select a name that resonates with your project’s objectives.

![Image 13: New project creation](https://docs.arduino.cc/static/215defe753769ed4a22923e8c1be7ce7/a6d36/app-lab-8.png)

New project creation

#### Classes:

Define the classes your model should detect (e.g., apple, banana). We will use them in the labeling process just before creating the dataset.

#### Dataset:

To train your model, you first need data. Start by creating a dataset of the objects you want to detect.

From your project **Dashboard**, click on **Collect new data**. You can build your dataset using your phone, computer, or the UNO Q itself, or by uploading existing images directly.

![Image 14: Collecting new data](https://docs.arduino.cc/static/9b21a91993cd899215927c2a59a01fdd/a6d36/app-lab-9.png)

Collecting new data

For our convenience, we will use a smartphone. Scan the QR code to open the link, select the **Camera** option, and grant the necessary permissions.

![Image 15: QR code to connect your phone](https://docs.arduino.cc/static/bcc4171c10e062aacab54f49e8ef4e35/a6d36/app-lab-10.png)

QR code to connect your phone

Capture a variety of images for the classes you want to detect (e.g., apples and bananas). Additionally, Edge Impulse will automatically create a class called **background** to teach the model what to ignore based on your pictures.

![Image 16: Apples and Bananas dataset](https://docs.arduino.cc/static/579a89e9ab893f78f42dab48ecf7a436/a6d36/app-lab-11.png)

Apples and Bananas dataset

**_Note: You can label your images as you capture them, or label them later using the Edge Impulse labeling tools._**

#### Impulse Design

Create your Impulse in the **Create impulse** section. Here you will define your model settings:

![Image 17: Impulse design](https://docs.arduino.cc/static/a2017703b193c8a4e833cab00239cd4e/a6d36/app-lab-12.png)

Impulse design

*   **Image resolution:** 320x320 pixels in this case 
*   **Processing block:** Image
*   **Learning block:** Object Detection (Images)

Click on **Save Impulse** and navigate to the _Image processing block_. Leave the **Color depth** parameter as

`RGB`, then click on _Save parameters_ and finally on _Generate features_.
![Image 18: Image processing block](https://docs.arduino.cc/f5cc47a328e49a9e2fe0a5815cb9271e/app-lab-13.gif)

#### Neural Network Tuning

Getting the right settings for your Neural Network takes time and trial and error. Follow the steps below for this model:

*   Navigate to the Object detection block in the left menu.
*   Change the model to **MobileNetV2 SSD FPN-Lite 320x320** by clicking on "Choose a different model".

![Image 19: Available models](https://docs.arduino.cc/f0a53d74041055e24baa4df1807a5131/app-lab-14.gif)

*   Click on **Save & Train** with the default settings and wait for the training performance results.

![Image 20: Training results](https://docs.arduino.cc/static/c9ce0533438b340f76a12538cd7d1e33/a6d36/app-lab-15.png)

Training results

**Optimize Training Cycles:**

The default is set to **25 cycles**. Monitor the training output.

*   If the accuracy hits a plateau or the validation loss stops decreasing significantly by epoch 15 or 20, you can **reduce** the cycles to save time on future runs.
*   If the accuracy is still climbing or the loss is still dropping when the process hits epoch 25, **increase** the number of cycles (e.g., to 40 or 50) to allow the model to finish learning.

**Refine the Learning Rate:**

This model uses a high default learning rate of **0.15**.

*   If the loss graph is volatile (jumping up and down wildly) or the model fails to converge, the model might be "overshooting" the optimal weights. **Reduce** the learning rate (e.g., try `0.1` or `0.05`).
*   If the training is stable but the accuracy remains poor, you can try slightly **increasing** it, but be careful as this model is sensitive to high rates.

**Prevent Overfitting:**

By default, **Data augmentation** is **disabled**.

*   If your model performs perfectly on the training data (high accuracy) but fails when you point the camera at real objects (low real-world performance), the model is "overfitting."
*   To fix this, **enable** Data augmentation. It randomly transforms your images during training, forcing the model to learn general features rather than memorize exact pixel values.

**Check On-Device Constraints:**

Object Detection models like SSD are computationally heavy.

*   **Inferencing time:** Verify that the inference time is low enough for your application (e.g., <500ms for ~2 FPS).
*   **Hardware limits:** Ensure your device has enough RAM to hold the model. If you see warnings that the model is too large for your MCU, verify that your specific hardware (like the Arduino UNO Q) has the memory required to run it.

In our case, the default settings gave us good results and converged:

*   **Inferencing Time:** 370 ms
*   **Flash Usage:** 11 MB

![Image 21: Training graphs](https://docs.arduino.cc/static/c17695d6727bde7ba235a1b3cd362ef9/a6d36/app-lab-16.png)

Training graphs

You can clone the model used in this tutorial from [here](https://studio.edgeimpulse.com/public/846966/live).

**_This is an example model with a very small dataset created for demonstration purposes. You can improve it by modifying it._**

**Impulse Design Effect:**

In the Edge Impulse project you will find another impulse design called

`Impulse #2`. We set this one up to illustrate a point.![Image 22: New performance results](https://docs.arduino.cc/static/d56a7aa965d3026b9e915921986c027f/a6d36/app-lab-25.png)

New performance results

This Impulse has the following settings:

*   **Resolution:** 96x96 pixels
*   **Neural Network architecture:** FOMO (Faster Objects, More Objects) MobileNetV2 0.35

Notice that the training result is shown as a confusion matrix and with these settings we have accomplished a very different performance:

*   **Inferencing Time:** 3 ms
*   **Peak RAM Usage:** 887.1 kB
*   **Flash Usage:** 102.1 kB

**_A key advantage of this model is that it uses lower-resolution input images, which significantly reduces the computational resources required for inference. Additionally, unlike traditional object detection that provides bounding boxes, FOMO is optimized to locate the center point (centroid) of detected objects._**

#### Model Testing

To test your model's performance with new data, use the **Live classification** and **Model testing** sections. These tools allow you to verify how well your model detects apples and bananas in images that were not used during the training process.

![Image 23: Live classification](https://docs.arduino.cc/static/8dae0860a3a168d87298f1b8849efb5b/a6d36/app-lab-17.png)

Live classification

You can also test your model on your smartphone using the same QR code we used to create the dataset (also found in the **Deployment** section). This time, tap on **Switch to classification mode** and wait for the model to download and start. Finally, use the camera to search for some apples and bananas.

![Image 24: Model running on phone](https://docs.arduino.cc/static/ea52134ce288d3751ffbc136a2b15e73/a6d36/app-lab-18.png)

Model running on phone

**_With your model already tested and validated, **go back to the Arduino App Lab**._**

## Custom AI Model Usage

Once you return to the Arduino App Lab, your new model will appear in your Brick's available models list.

![Image 25: Custom model selection](https://docs.arduino.cc/static/ce3b7941a01025b2f9b05bdc922c69a2/a6d36/app-lab-21.1.png)

Custom model selection

To use it in your App, click on the **Install** button and wait for it to be built and installed on your Arduino UNO Q.

![Image 26: Model installation](https://docs.arduino.cc/static/9e7b26e34397cc0666573c76f9facb21/a6d36/app-lab-22.1.png)

Model installation

Finally, you can select your new model by clicking on your **Brick Configuration** button.

![Image 27: Model selection](https://docs.arduino.cc/static/f6c5423a70996562da168ab20a7da92b/a6d36/app-lab-23.1.png)

Model selection

### Running the App

Now, run your App, and it will be using your custom AI model to detect apples and bananas.

![Image 28: Run the App](https://docs.arduino.cc/static/5f44de8dcf08d7e905fb1211c4e70001/a6d36/final-image.png)

Run the App

**_In the Python console you will see the detection logs and their confidence._**

Also, you can preview your cameras live feed and see the model running in real-time by navigating to

`<UNO-Q-IP-ADDRESS>:4912` in your favorite browser.
![Image 29: Image of the Edge Impulse live feed](https://docs.arduino.cc/b52ed6a86f942acffcb2cff88dd17528/fruits-detector.gif)

## Conclusion

In this tutorial, you learned how to extend the capabilities of Arduino App Lab by engineering and deploying custom AI models using Edge Impulse Studio. You explored the complete machine learning pipeline—from collecting a custom dataset of images to training a MobileNetV2 SSD object detection model optimized for the Arduino UNO Q.

Thanks to the seamless integration between Arduino App Lab and Edge Impulse, you can now swap generic "models" for specialized ones, enabling your Bricks to recognize specific objects like apples and bananas with high precision. This transforms your UNO Q from a simple computer into a tailored edge AI device capable of solving unique, real-world problems.

## Next Steps

*   Expand your current dataset with more samples and variations (lighting, angles) to improve your object detection model's accuracy and robustness.
*   Try creating an audio classification model using a USB microphone to teach your UNO Q to recognize voice commands or environmental sounds.
*   Integrate your new custom model into a Logic flow within App Lab to trigger specific actions, such as turning on an LED or sending a notification, when a specific object is detected.
*   Export the `.eim` file manually from Edge Impulse to experiment with running your custom model in C++ or Python projects outside of Arduino App Lab.



---

## Source: https://docs.arduino.cc/software/app-lab/tutorials/companion-app/

Title: Arduino App Lab and IoT Remote Phone App Integration | Arduino Documentation

URL Source: https://docs.arduino.cc/software/app-lab/tutorials/companion-app/

Markdown Content:
This tutorial teaches you how to leverage the Arduino IoT Remote app to use your phone sensors with Arduino App Lab applications.

## Overview

In this tutorial, you will learn how to unlock your smartphone's potential within Arduino App Lab using the IoT Remote app. We will explore a powerful new feature that turns your phone into a wireless input device. Specifically, you will learn how to stream video from your phone directly to the Arduino App Lab to power the Object Detection Brick, allowing you to run AI vision projects without needing a USB webcam.

![Image 1: thumbnail](https://docs.arduino.cc/static/e1f248d770f28a342675753365be2262/a6d36/thumbnail.png)

**Note:** Your smartphone will be used as a remote camera input. Both the Arduino UNO Q and your smartphone must be connected to the same network.

## Goals

*   Understand the integration between the IoT Remote app and the Arduino App Lab.
*   Configure your smartphone to act as a wireless camera input for your projects.
*   Test an example application using the Object Detection Brick with the remote video feed as input.
*   Run the project to detect and classify objects in real-time using your phone.

## How It Works

This integration transforms your smartphone into a wireless camera for the Arduino App Lab through a secure pairing process:

### The Pairing Process

1.   **QR Code Generation**: When you run your app, the Arduino UNO Q generates a unique one-time password (OTP) and creates a QR code containing connection details (IP address, port, and the secret).
2.   **Secure Handshake**: You scan the QR code with your phone's camera app. The IoT Remote app is opened automatically and receives the secret to authenticate with your board over a secure WebSocket connection.
3.   **Video Streaming**: Once authenticated, your phone begins streaming video over HTTP on port `4912` by default. The board receives these frames and makes them available to your application.

### Architecture Overview

The system uses two communication channels:

*   **WebSocket (Control Channel)**: Handles the initial pairing and sends control messages. Each session uses a unique secret for security.
*   **HTTP (Data Channel)**: Delivers the actual video stream on port `4912`, providing continuous data transmission with minimal latency.

**_Both devices communicate directly over your local network. No video data is sent to the cloud, making sure of privacy and low latency._**

## Required Hardware and Software

### Hardware Requirements

*   [Arduino UNO Q](https://store.arduino.cc/products/uno-q) (x1)
*   Smartphone (iOS or Android)
*   Personal computer with internet access (to view the Web UI)

### Software Requirements

*   [Arduino App Lab](https://www.arduino.cc/en/software/#app-lab-section)
*   [IoT Remote App](https://cloud.arduino.cc/iot-remote-app/)
*   Arduino Account 

## Mobile Camera Streaming

To test this feature, we will leverage the **Detect Objects on Smartphone Camera** example inside the Arduino App Lab. It will allow us to easily learn how this feature works and try it out without the need to develop an App from scratch.

![Image 2: Detect Objects on Smartphone Camera](https://docs.arduino.cc/static/080df1f2213fb31014decadde911638d/a6d36/mobile-example.png)

Detect Objects on Smartphone Camera

**_To stream your phone's camera feed to your UNO Q, both must be on the same network._**

**_**Note**: The video stream is delivered over HTTP on **port 4912**. If you're on a corporate or restricted network, make sure this port is accessible. The initial pairing uses a separate WebSocket connection on a dynamically assigned port._**

### Arduino App Lab Setup

1.   Ensure your Arduino UNO Q is powered and connected to the network.
2.   Open the Arduino App Lab on your computer.
3.   Run the **Detect Objects on Smartphone Camera** example in Arduino App Lab.
4.   The App should open automatically in the web browser. You can open it manually via `<board-name>.local:7000`.
5.   The Web UI will display a **QR Code**. ![Image 3: QR Code in the browser](https://docs.arduino.cc/static/5afb29478f4438d337fd763e227f53db/a6d36/qr-code-full.png)

QR Code in the browser

### Arduino IoT Remote Setup

1.   Make sure to have installed the [**Arduino IoT Remote**](https://cloud.arduino.cc/iot-remote-app/) app on your smartphone. ![Image 4: App available in your favorite OS](https://docs.arduino.cc/static/4a092a5eb37d253b3a7a63f7832a8f64/a6d36/install-app.png)

App available in your favorite OS

2.   Scan the QR code with your phone's camera app. ![Image 5: QR code scan](https://docs.arduino.cc/static/ffd04c96693c98eb0bebf3f26b403559/a6d36/qr-code.png)

QR code scan

3.   The Arduino IoT Remote app will open automatically on your phone. Log in with your Arduino account if you haven't already.
4.   Once connected, the camera feed will be visible directly on your phone and the video stream will be transmitted to the Web UI.
5.   Point your phone at objects and watch as the App detects and recognizes them. ![Image 6: Phone's camera stream](https://docs.arduino.cc/static/1e340e57d465dd06af79dac0c997246e/a6d36/camera-stream.png)

Phone's camera stream

### No QR Code Configuration (Optional)

You can also configure your phone from the IoT Remote app without scanning the QR code:

1.   Go to Devices, tap on the plus icon to set up a new device and select **Stream phone camera to UNO Q**. ![Image 7: IoT Remote setup](https://docs.arduino.cc/static/39dc21f7803419a66f1f091d31c4fb61/a6d36/iot-remote.png)

IoT Remote setup

2.   Select your Arduino UNO Q from the list. (It must be connected to the same network) ![Image 8: Select your UNO Q](https://docs.arduino.cc/static/cf70e69457e0e9c062e875fef90e2146/a6d36/search-uno-q.png)

Select your UNO Q

3.   Enter the 6 digits code below your QR code on the Web UI. ![Image 9: Start streaming](https://docs.arduino.cc/static/17769a0563dfdada2c02d88bc1a1f5ad/a6d36/start-streaming.png)

Start streaming

4.   The streaming will start right away.

![Image 10: Smartphone Camera Streaming](https://docs.arduino.cc/7319626e598512831c6f8acc6ce82845/Companion-app.gif)

## Mobile Integration Feature

To add the smartphone camera integration to your own custom Arduino App Lab application, you need to implement a specific handshake mechanism between your board and the phone. It consists of a Python® backend that manages the secure connection and a JavaScript frontend that generates the pairing QR code.

### 1. Backend Implementation (`main.py`)

The backend is responsible for creating a secure "room" for the phone to connect to. Use the

`WebSocketCamera` class to generate a one-time password (secret) that allows only the intended phone to connect to your board.
**Required Imports:**

`1import secrets2import string3from arduino.app_peripherals.camera import WebSocketCamera`

**Setup Logic:**

You must generate a random secret (OTP) and pass it to the

`WebSocketCamera` instance. You also need to send these connection details to your frontend so it can generate the QR code.

```
1# 1. Generate a random 6-digit secret for security2def generate_secret() -> str:3    characters = string.digits4    return ''.join(secrets.choice(characters) for _ in range(6))5
6secret = generate_secret()7
8# 2. Initialize the Camera with the secret9# 'encrypt=True' ensures the handshake is secure10resolution = (480, 640)  # Portrait resolution for mobile devices11camera = WebSocketCamera(resolution=resolution, secret=secret, encrypt=True, adjustments=resized(resolution, maintain_ratio=True))12
13# 3. Send connection details to the Frontend when a client connects14# This passes the IP, Port, and Secret required for the QR Code15ui.on_connect(lambda sid: ui.send_message("welcome", {16    "client_name": camera.name,17    "secret": secret,18    "status": camera.status,19    "protocol": camera.protocol,20    "ip": camera.ip,21    "port": camera.port22}))
```

### 2. Frontend Implementation (`app.js`)

The frontend acts as the bridge. It receives the connection details from the backend and encodes them into a specific URL format inside a QR code. When the Arduino IoT Remote app scans this, it knows exactly where to send the video stream.

**Prerequisites:** Ensure you have a QR code library included in your HTML (e.g.,

`qrcode.min.js`).
**Handling the Handshake:**

In your

`app.js`, listen for the "welcome" message from the backend. Use the data received to generate the pairing URL.

```
1// Listen for connection details from main.py2socket.on('welcome', async (message) => {3    // If the camera is not yet connected, generate the QR code4    if (message.status !== "connected") {5        generateQRCode(message.secret, message.protocol, message.ip, message.port);6    }7});8
9function generateQRCode(secret, protocol, ip, port) {10    const qrCodeContainer = document.getElementById('qrCodeContainer');11    12    // The specific URL format required by the IoT Remote App13    const connectionUrl = `https://cloud.arduino.cc/installmobileapp?otp=${secret}&protocol=${protocol}&ip=${ip}&port=${port}`;14
15    new QRCode(qrCodeContainer, {16        text: connectionUrl,17        width: 128,18        height: 12819    });20}
```

**Displaying the Stream:**

Once the phone connects, the video is not sent via WebSocket but served over HTTP on a specific port (default is usually

`4912`). You should use an `<iframe>` to display it.

`1// Logic to display video when status becomes 'streaming'2const streamUrl = `http://${window.location.hostname}:4912/embed`;3document.getElementById('videoIframe').src = streamUrl;`

## Troubleshooting Tips

*   **QR code won't scan**: Low screen brightness or poor lighting conditions can be the cause. Try increasing your computer's screen brightness and ensure the QR code is well lit. Hold your phone steady and at a comfortable distance (10-15 cm) from the screen.

*   **"Connection failed" error**: Phone and Arduino UNO Q may be on different networks. Please verify that both devices are connected to the same Wi-Fi® network. Check your phone's Wi-Fi settings and ensure you're not on mobile data.

*   **Video stream not loading**: Port 4912 may be blocked by your firewall or network restrictions. Check your computer's firewall settings and make sure port 4912 is open for incoming connections. If you're on a corporate network, you may need to request access from your IT administrator.

*   **Laggy or stuttering video**: Network congestion or insufficient bandwidth can affect stream quality. Try reducing the resolution in your backend code to

`(320, 480)` for better performance. Make sure no other devices are heavily using the network during streaming.
*   **"Invalid secret" message**: The QR code has likely expired (typically after 5 minutes or after one successful connection). Refresh the web page to generate a new QR code with a fresh secret, then scan again.

*   **Stream suddenly stops or freezes**: Your phone may have gone to sleep or lost network connection. Keep your phone awake by adjusting sleep settings in the IoT Remote app, or tap the screen occasionally. Verify that Wi-Fi® hasn't disconnected on your phone.

## Conclusion

In this tutorial, you learned how to transform your smartphone into a wireless input device for Arduino App Lab using the Arduino IoT Remote app. You successfully configured your network environment, paired your phone with the UNO Q via a QR code, and streamed live video to power an AI object detection model.

This integration eliminates the need for external USB webcams, allowing you to prototype computer vision applications more freely. By understanding the handshake mechanism between the Python® backend and the JavaScript frontend, you now have the foundation to build custom applications that leverage the powerful sensors already present in your mobile device.

### Next Steps

*   **Integrate into Custom Apps:** Use the code snippets provided in the "Mobile Integration Feature" section to add phone camera support to your own Arduino App Lab projects.
*   **Experiment with Other Bricks:** Try feeding the mobile camera stream into different Bricks, such as the `video_classifier` or `face_detection` Bricks.
*   **Optimize Performance:** Experiment with different video resolutions and frame rates in the `WebSocketCamera` configuration to balance quality and latency for your specific network conditions.

