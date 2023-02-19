'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [
      {
        name: 'Xbox series X',
        image: 'Console-Xbox-Series-X.jpg',
        description:
          'Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles-all games look and play best on Xbox Series X. At the heart of Series X is the Xbox Velocity Architecture, which pairs a custom SSD with integrated software for faster, streamlined gameplay with significantly reduced load times. Seamlessly move between multiple games in a flash with Quick Resume. Explore rich new worlds and enjoy the action like never before with the unmatched 12 teraflops of raw graphic processing power. Enjoy 4K gaming at up to 120 frames per second, advanced 3D spatial sound, and more. Get started with an instant library of 100+ high-quality games, including all new Xbox Game Studios titles the day they launch like Halo Infinite, with Xbox Game Pass Ultimate (membership sold separately)',
        price: 779.0,
        active: 'on',
        categories_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samsung Galaxy Note 10 256GB Aura Black',
        image: 'samsung-galaxy-note10.jpg',
        description:
          "The power phone in a beautifully balanced, compact design. The Samsung Galaxy Note10's stunning 6.3-inch Infinity-O Display lets you see every detail in everything you watch. Shoot video like a pro to create content like never before. Power through your most demanding days with Galaxy Note10's intelligent battery. And rewrite how you use your phone with a powerful S Pen.",
        price: 1398.0,
        active: 'on',
        categories_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Xbox Series S',
        image: 'XboxS.jpg',
        description:
          'Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point.Go all-digital and enjoy disc-free, next-gen gaming with the smallest Xbox console ever made.Bundle includes: Xbox Series S console, one Xbox Wireless Controller, a high-speed HDMI cable, and power cable.Experience next-gen speed and performance with the Xbox Velocity Architecture, powered by a custom SSD and integrated software.',
        price: 380.0,
        active: 'on',
        categories_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Playstation 5 Console',
        image: 'play-5.jpg',
        description:
          'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
        price: 1100.0,
        active: 'on',
        categories_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razer BlackWidow TE Chroma v2 Mechanical Gaming Keyboard',
        image: 'teclados.jpg',
        description:
          "Quickest Mechanical Switch for Gaming: Razer Yellow switch technology beats competitor, legacy 'speed' keys in actuation distance by up to 20%, requiring 45 G of force; ideal for fast-paced gaming requiring quiet, high-speed key presses",
        price: 115.0,
        active: 'on',
        categories_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rii Wired Keyboard RK907',
        image: 'standard-keyboard.jpg',
        description:
          'USB Keyboard with silent typing in the office /at home ,comfortable typing experience. Office keyboard plugand play, easy to use. Solid keyboard with adjustable feet.',
        price: 18.0,
        active: 'on',
        categories_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LANGTU Membrane Gaming Keyboard',
        image: 'langtu.jpg',
        description:
          "LANGTU Team always maintain that 'Customer First, Quality First'. We has a strong research and development department, we has been innovating keyboard for many years. We are very strict with our material and technology that is committed to providing customers with the best quality and innovative. At LANGTU, we work passionately to create products with simplicity and usability. We talk and listen to our customers and value every constructive feedback from them to improve our products and services.",
        price: 32.99,
        active: 'on',
        categories_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ASUS VivoBook S 14X OLED Laptop, 14.5” 2.8K 16:10 120Hz Display, AMD Ryzen 7 6800H CPU, 16GB RAM, 1TB SSD, Windows 11 Home, M5402RA-AS71-CA',
        image: 'notebook.jpg',
        description:
          'Explore every possibility with ASUS Vivobook S 14X OLED, the outstanding OLED laptop that combines bold style with powerful performance. Powered by a AMD Ryzen™ 7 6800H processor, and featuring a 180° lay-flat hinge and a high-capacity 1 TB SSD, it’s the perfect laptop for productivity, creativity or entertainment. Its stunning 16:10 2.8K OLED display provides ultrasmooth visuals, professional-grade colors and better eye care, and the redesigned chassis is light and has a sleek look. There are plenty of convenient I/O ports and it includes all the latest ASUS AI Noise-Canceling technology. Whatever your needs, ASUS Vivobook S 14X OLED is the answer — so start exploring now!',
        price: 1150.0,
        active: 'on',
        categories_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Microsoft Xbox Wireless Headset',
        image: 'headset-xbox.jpg',
        description:
          'Game loud and clear with the Xbox Wireless headset, surround yourself with spatial sound technologies including Windows Sonic, Dolby Atmos, and DTS Headphone: X. Auto-mute and voice isolation reduce background noise and allow for crystal-clear chat. The flexible, lightweight design with an adjustable headband makes for a more comfortable experience during extended play sessions while rotating ear Cup dials provide a quick and intuitive way to adjust volume and game/chat balance. Fine-tune your headset with the Xbox accessories app for a customized audio experience. Pair directly to your console with Xbox Wireless Radio without the need for dongles, cables, or a base Station, and connect to your mobile device with Bluetooth for on-the-go music or chat.',
        price: 129.9,
        active: 'on',
        categories_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razer Kraken V3 Pro HyperSense Wireless Gaming Headset',
        image: 'headsets.jpg',
        description:
          'To reach the ultimate depths of immersion, one must dive beyond sight and sound. Unlock a third sense for gaming with the Razer Kraken V3 Pro—a wireless haptic PC gaming headset powered by Razer HyperSense. With the ability to feel what you hear, gaming has never felt this intense or real.',
        price: 250.0,
        active: 'on',
        categories_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DELL G15 5525 Gaming Laptop',
        image: 'note-dell-g15.jpg',
        description:
          "Perpetual high performance With next-gen AMD Ryzen processors and optimized performance settings, you can revel in powerful and consistent high-end performance during every gaming experience. Additionally, the new and improved Alienware-inspired thermal design features optimal cooling thanks to dual air-intake, ultra-thin fan bladesi, copper pipes and four strategically-placed vents. So no matter how hot the action gets, your system will keep its cool. Uninterrupted immersion With dominant discrete graphics, you get smooth, uninterrupted gameplay and vivid visuals, making it easy to fully immerse yourself in every experience. You'll also experience thrilling action with faster loading times and a quieter system.",
        price: 1299.99,
        active: 'on',
        categories_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dell Alienware m15 R7 Gaming Laptop (2022)',
        image: 'note-dell-alien.jpg',
        description:
          'Dell Alienware m15 R7 Laptop 15.6" Non-Touch Screen Dark Side of the Moon. i9 i9-12900H Fourteen-Core Processor 3.8GHz (5GHz With Turbo Boost). 1TB SSD Hard Drive & 64GB RAM Memory. 2560x1440 QHD resolution Non-Touch with an integrated Webcam and an Nvidia GeForce RTX 3080 Graphics Card. Wireless Wifi & Bluetooth. Windows 11 Home',
        price: 4900.0,
        active: 'on',
        categories_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('products', products, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
}
