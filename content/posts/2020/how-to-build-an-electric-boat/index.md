
How to build an electric boat
===
posted: July 30, 2020
type: draft


# What I learned

<!--more-->

## Mysteries of brushless electric motors (BLDC)

**Principle of brushless motors**: A brushless motor is like a railgun, except rather than causing linear acceleration, it creates angular acceleration. It’s pretty amazing. brushless motors have two basic components: 

1. The rotor has a permanent magnet attached to it and rotates. 
2. The stator has electromagnetic coils attached to it, and is fixed body of the motor.

**Inrunners vs outrunners**: An inrunner’s rotor is on the inside of the stator, coming out as a shaft. An outrunner’s rotor is on the outside of the stator, and typically the whole outside of the motor rotates. Outrunners tend to be have higher torque since the rotating part is larger.

[![Outrunner vs. inrunner](inrunner-vs-outrunner.png)](https://howtomechatronics.com/how-it-works/how-brushless-motor-and-esc-work/)

**Names and dimensions of motors**: Brushless motors are often named by their dimensions. A motor with a 60mm diameter and 100mm long is sometimes called 60D100L. Other times they are called 60100, and you're supposed to know how to parse that because you're super cool. The RC boat I built had a 2040, the eSUP’s was 5085.

**Voltage and RPM**: Many brushless motors have a KV rating, not to be confused with kW. KV is the ratio between voltage and RPM without load. The higher the voltage, the faster the motor will try to rotate.
 

## Speed controllers and VESC

Speed controllers are microcontrollers that know how to actuate the electromagnets in a brushless DC motor with the correct timings, based on sensing the current phase of the rotor. There are a variety of ways to sense this phase. 

**Sensored vs. sensorless**: Sensored brushless motors have hall sensors which sense the magnetic field of the permanent magnets affixed to the rotor. Sensorless motors rely on tracking [back-EMF](https://en.wikipedia.org/wiki/Counter-electromotive_force) generated as the rotor spins.

**PWM as input**: Brushless motors have a bunch of permanent magnets in the Speed controllers often also have the same “interface” as servo motors. They are controlled with PWM duty cycling. RC remotes are very plug and play as a result. The remote I bought has a giant trigger for throttle, which maps well to the speed controller (ESC). It also has a wheel for turning, which maps naturally to the servo rudder on my RC boat. The receiver has pins that plug into a standard 3-pin servo connector.

**FOC vs BLDC**:

**VESC is highly configurable**: Many of the more advanced speed controllers are built on top of an open source platform called VESC. This is an extremely cool piece of technology which is used across a wide variety of personal EV projects. Fundamentally, it enables very granular software control over the ESC’s behavior. For example, I was able to set current limits, and then increase them when I felt things were going well, all in real time. VESC has a large user base and the software ecosystem is strong, including an open source cross platform UI to configure things. Just plug the VESC into a laptop using a USB cable and you’re off to the races.

**VESC gives real-time data logging during trials**: I bought a [cheap little Bluetooth module](TODO) for my VESC which lets me pair with the device with an Android phone (no iOS yet) during a water trial. This was super handy, as I could get real-time diagnostics during the trial, including motor and battery current and how quickly the motor was spinning. Most importantly, you can log real-time data to a CSV file for later analysis, which is built into the desktop VESC Tool.

**ERPM vs RPM**: One of the main things I wanted to know from the water trials was how quickly the propeller was spinning under load (in the water, and pushing my body weight). However the VESC only outputs the “electrical RPM” (ERPM), which is defined as `ERPM = RPM * Number of coils in motor`. This is a bit tricky, given the fact that it was hard to know what the number of coils was without taking it apart. One way to divine it is to spin the unplugged motor and try to count the number of times in a full rotation where the motor clicks into some groove. Each of these “notches” corresponds to a permanent magnet crossing. By dividing said number by 3, you get the number of coils because of the way the motor is set up. I found this to be tricky, so took an empirical approach. Marking the rotor with a marker, I set the ERPM to 5000 and counted the actual RPM using my smartphones slow motion mode. Based on the fact that I counted 720 RPM, the number of coils must be 7.

TODO: include slow mo video

## Batteries

**Standard cells**: LiPo batteries are made out of one fundamental unit: a cell of nominal voltage 3.7V. Each LiPo pack is made by chaining multiple cells in parallel and in series. Battery packs are named after the number of cells in series and in parallel, like 6s2p means that there are 6 cells in series and 2 in parallel. 

**Voltage and charge**: One way to tell how much charge remains is to look at actual output voltage. As the battery discharges, its voltage drops too. Fully charged, each cell is 4.2V. Here’s a [great guide about LiPo batteries](https://rogershobbycenter.com/lipoguide) for more.

## Connectors and wires

**RC connectors**: there is a vast variety of connector systems to connect pairs of wires together in the RC world. There are T connectors, XT, EC, AS. And many variants of each, with most having a male and female variant. So generally speaking, you lop off the connector and replace it with the one you need. 

**Wire gauge**: wires come in standard sizes, and as they say, size matters. In this particular case, the larger the wire, the smaller the gauge, the more current the wire will support before overheating. For example, my RC boat maxed at 30A and used 14 AWG wire, about 1.6 mm thick. My eSUP maxed at 60A and used 12 AWG wire, about 2 mm thick. Many Efoil builds go up to 200A and use 8 AWG wire, about 3.2 mm thick. The thicker the wire, the trickier it is to work with, including crimping and soldering. 

**Wire gauge, chassis wiring and power transmission**: One of the top results for wire gauge is [this one](https://www.powerstream.com/Wire_Size.htm). They offer two current limits which are vastly different: power transmission and chassis wiring. My understanding is that power transmission refers to power lines, which means a bundle of many wires closely bound to one another, spanning great distances. The longer the distance the higher the resistance, the more heat is disappated. Thus I’ve been assuming chassis wiring limits, and fudging those quite a bit, since its not necessarily the case that the wires will be running at full load, and in my particular case some of the wires are submerged in water and thus naturally cooled.

**Soldering iron quality**: I used to think that a soldering iron was a soldering iron, and the main thing that matters was the tip size, for doing fine or less fine work. As it turns out, soldering irons have other properties, like the heat that they get up to. My soldering iron doesn’t have a power supply where you can regulate temperature, and I managed to detach one of the three motor contacts. My friend and EE expert J saved my ass, and I am eternally grateful!

## Propellers and propulsion

**Propeller basics**: MIT offers an entire class about propellers called Hydrofoils and Propellers, 13.04, and features a [handy pamphlet](TODO) introducing propeller terms and concepts. A propeller displaces water, but also generates lift because each blade is shaped like a foil. The pamphlet linked above also provides nice cross-sections of a sample propeller, which gave me enough information to emulate it is Onshape. Here’s the resulting design:

TODO: prop pic and link to onshape

The main ways to measure a propeller is diameter and pitch, which is the distance the propeller would move (linearly, perpendicular to its axis of rotation) if it were a helical screw traveling through a soft solid.

**Propeller mounting**: Turns out there are a bunch of ways you can attach a propeller to a spinning object. Lack of standards is a common theme again. I saw at least 4 systems in my brief exploration:

1. Some shafts are threaded, which lets you screw on specially shaped nuts that jam into the cavity of the propeller and make it turn alongside the motor. 
2. Some shafts have an indentation and the propeller has a hole on the side of its base that accepts a flat bottomed screw that jams into the flat of the shaft. 
3. My 3D printed propeller mounts to the outrunner using four screws which attach to the face of the rotor.
4. Some shafts have a hole in the middle of it and the propeller is attached using a pin that protrudes through the whole rotating shaft. 

**Weedless propellers**: My first water test suffered greatly from weed contamination. This is because the 65cm mast I was using meant that the propeller was quite deep in the water, deep enough to “mow the lawn” of a bunch of lake weeds in Lake Union. The vegetation wound around the propeller and created so much drag, the motor ground to 10% of its unloaded speed. I had to manually clear the debris before continuing the trial. One solution to this problem is to design a “weedless” propeller, which usually entails introducing a lot of skew, which reduces the efficiency of the propeller.

**Displacement vs. planing hulls**: There are two main ways for a hull to travel on water: displacement and planing. Displacement hulls tend to be long, narrow and deep, while planing hulls are often flat and wide.

- Displacement: the hull is fully displacing the water in the same way that it does when at rest. Most heavy ships travel fully in this mode: container ships, tug boats.
- Planing: because of the motion of the vessel, the hull lifts above the water, reducing wake and drag. Speed boats and jet skis are often planing.

**Hull speed**: When a vessel moves and displaces water, it creates wake in the front and in the back, which slows its movement. Hull speed isn't a real limit, but the heavier the vessel, the harder it is to surpass. `Hull speed (knots) = 1.34 sqrt(Length of waterline (ft))`.

## Misc

**Solid state relays**: Solid state relays (SSRs) are electrical components that let a low voltage control circuit control a high voltage, high current load circuit. In my 
particular case, I use one in conjunction with a kill switch. They aren't that scary to wire, but they get super hot. During my second trial, I neglected to attach a heat sink to my SSR and melted a substantial indent the waterproof case housing LiPo & ESC.

**Foiling is probably awesome**: I didn’t get to foil yet, for two reasons. Firstly, and most glaringly, although I have a foil mast, I don’t have a foil wing. Secondly, my eSUP build and current motor don’t have enough juice to generate the lift required to get a hypothetical wing to lift my weight. However the promise is incredible. Once the board lifts from the water, there is far far less friction involved. Since the board is fully clear of the water, the only thing that stands between you and flight is the friction from the small winglet and mast.

**Masts and clamps**: A common pattern in the efoil.builders community is to 3D print a clamp that attaches to a foiling mast, so that the motor is just above the fuselage of the plane. Here’s my attempt at it. Works pretty well:

TODO: mast clamp image etc.
