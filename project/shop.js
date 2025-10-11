// Product data
const products = [
  // Resistors
  
  {
    id: 2,
    name: "Resistor Pack (1/2W)",
    price: 3.99,
    category: "electronics",
    description: "Pack of 100 assorted resistors (1/2 watt).",
    image: "./public/image2.jpeg",
  },
  {
    id: 3,
    name: "Variable Resistor 10KΩ",
    price: 1.49,
    category: "electronics",
    description: "10K ohm adjustable resistor (potentiometer).",
    image: "./public/image3.jpeg",
  },

  // Capacitors
  {
    id: 4,
    name: "Electrolytic Capacitor Kit",
    price: 5.99,
    category: "electronics",
    description: "Assortment of electrolytic capacitors, various values.",
    image: "./public/image4.jpeg",
  },
  {
    id: 5,
    name: "Ceramic Capacitor Kit",
    price: 4.49,
    category: "electronics",
    description: "Pack of 100 ceramic capacitors, multiple values.",
    image: "./public/image5.jpeg",
  },
  {
    id: 6,
    name: "Variable Capacitor 100pF",
    price: 2.99,
    category: "electronics",
    description: "Adjustable capacitor for RF circuits.",
    image: "./public/image6.jpeg",
  },

  // Semiconductors
  {
    id: 7,
    name: "NPN Transistor Pack",
    price: 3.99,
    category: "electronics",
    description: "Pack of 50 NPN transistors (BC547, 2N2222, etc.).",
    image: "./public/image7.jpeg",
  },
  {
    id: 8,
    name: "PNP Transistor Pack",
    price: 3.99,
    category: "electronics",
    description: "Pack of 50 PNP transistors (BC558, etc.).",
    image: "./public/image8.jpeg",
  },
  {
    id: 9,
    name: "MOSFET IRF540N",
    price: 10.99,
    category: "electronics",
    description: "Power MOSFET for switching applications.",
    image: "./public/image9.jpeg",
  },

  // Diodes
  {
    id: 10,
    name: "Rectifier Diode 1N4007",
    price: 1.29,
    category: "electronics",
    description: "Standard 1A rectifier diode.",
    image: "./public/image10.jpeg",
  },
  {
    id: 11,
    name: "Zener Diode Pack",
    price: 2.49,
    category: "electronics",
    description: "Assortment of zener diodes for voltage regulation.",
    image: "./public/image11.jpeg",
  },
  {
    id: 12,
    name: "Schottky Diode SS14",
    price: 1.99,
    category: "electronics",
    description: "Fast recovery Schottky diode.",
    image: "./public/image12.jpeg",
  },

  // Integrated Circuits
  {
    id: 13,
    name: "IC 555 Timer",
    price: 5,
    category: "electronics",
    description: "Versatile timer IC for oscillators and pulse generation.",
    image: "./public/image13.jpeg",
  },
  {
    id: 14,
    name: "Op-Amp IC LM358",
    price: 5,
    category: "electronics",
    description: "Dual operational amplifier IC.",
    image: "./public/image14.jpeg",
  },
  {
    id: 15,
    name: "Voltage Regulator 7805",
    price: 10,
    category: "electronics",
    description: "5V linear voltage regulator.",
    image: "./public/image15.jpeg",
  },
  {
    id: 16,
    name: "Voltage Regulator 7812",
    price: 10,
    category: "electronics",
    description: "12V linear voltage regulator.",
    image: "./public/image16.jpeg",
  },

  // // Microcontrollers & Boards
  {
    id: 17,
    name: "Arduino Uno R3",
    price: 699.99,
    category: "electronics",
    description: "Microcontroller board for DIY projects.",
    image: "./public/image17.jpeg",
  },
  {
    id: 18,
    name: "Raspberry Pi 4 (4GB)",
    price: 650.00,
    category: "electronics",
    description: "Single-board computer for projects.",
    image: "./public/image18.jpeg",
  },
  {
    id: 19,
    name: "ESP32 WiFi+Bluetooth Module",
    price: 80.99,
    category: "electronics",
    description: "Dual-core microcontroller with wireless capabilities.",
    image: "./public/image19.jpeg",
  },

  // // Displays
  {
    id: 20,
    name: "LCD 16x2 Display",
    price: 70.99,
    category: "electronics",
    description: "16x2 alphanumeric display module.",
    image: "./public/image20.jpeg",
  },
  {
    id: 21,
    name: "OLED 0.96 Inch Display",
    price: 40.99,
    category: "electronics",
    description: "128x64 I2C OLED display.",
    image: "./public/image21.jpeg",
  },

  // Sensors
  {
    id: 22,
    name: "DHT11 Temperature Sensor",
    price: 1.49,
    category: "electronics",
    description: "Temperature and humidity sensor.",
    image: "./public/image22.jpeg",
  },
  {
    id: 23,
    name: "HC-SR04 Ultrasonic Sensor",
    price: 80.99,
    category: "electronics",
    description: "Distance measuring sensor.",
    image: "./public/image23.jpeg",
  },
  {
    id: 24,
    name: "LDR Light Sensor",
    price: 0.49,
    category: "electronics",
    description: "Light-dependent resistor.",
    image: "./public/image24.jpeg",
  },

  // Motors
  {
    id: 25,
    name: "Servo Motor SG90",
    price: 110.49,
    category: "electronics",
    description: "9g mini servo motor.",
    image: "./public/image25.jpeg",
  },
  {
    id: 26,
    name: "DC Motor 300RPM",
    price: 15.99,
    category: "electronics",
    description: "Small DC motor for projects.",
    image: "./public/image26.jpeg",
  },
  {
    id: 27,
    name: "Stepper Motor 28BYJ-48",
    price: 35.49,
    category: "electronics",
    description: "5V stepper motor with driver.",
    image: "./public/image27.jpeg",
  },

  // Connectors
  {
    id: 28,
    name: "Jumper Wires Set",
    price: 20.49,
    category: "electronics",
    description: "Male-to-male, male-to-female, female-to-female wires.",
    image: "./public/image28.jpeg",
  },
  {
    id: 29,
    name: "Screw Terminal Block",
    price: 1.29,
    category: "electronics",
    description: "2-pin screw terminal connector.",
    image: "./public/image29.jpeg",
  },
  {
    id: 30,
    name: "Dupont Connector Kit",
    price: 5.49,
    category: "electronics",
    description: "Assorted crimp connectors and housings.",
    image: "./public/image30.jpeg",
  },

  // Power
  {
    id: 31,
    name: "9V Battery",
    price: 39.99,
    category: "electronics",
    description: "Standard 9V alkaline battery.",
    image: "./public/image31.jpeg",
  },
  {
    id: 32,
    name: "Li-Ion 18650 Battery",
    price: 30.49,
    category: "electronics",
    description: "Rechargeable 18650 lithium-ion cell.",
    image: "./public/image32.jpeg",
  },
  {
    id: 33,
    name: "Battery Holder 2xAA",
    price: 10.49,
    category: "electronics",
    description: "Battery holder for 2 AA cells.",
    image: "./public/image33.jpeg",
  },

  // Tools & Prototyping
  {
    id: 34,
    name: "Breadboard 830 Points",
    price: 120.99,
    category: "electronics",
    description: "Solderless breadboard for prototyping.",
    image: "./public/image34.jpeg",
  },
  {
    id: 35,
    name: "Mini Soldering Iron 25W",
    price: 100.99,
    category: "electronics",
    description: "Basic soldering iron for electronics work.",
    image: "./public/image35.jpeg",
  },
  {
    id: 36,
    name: "Desoldering Pump",
    price: 50.99,
    category: "electronics",
    description: "Manual desoldering tool for removing solder.",
    image: "./public/image36.jpeg",
  },

  // Modules
  {
    id: 37,
    name: "Relay Module 5V",
    price: 1.49,
    category: "electronics",
    description: "Single channel relay module for switching loads.",
    image: "./public/image37.jpeg",
  },
  {
    id: 38,
    name: "Motor Driver L298N",
    price: 3.99,
    category: "electronics",
    description: "Dual H-bridge motor driver module.",
    image: "./public/image38.jpeg",
  },
  {
    id: 39,
    name: "Buzzer Module",
    price: 3.79,
    category: "electronics",
    description: "Active buzzer module for sound alerts.",
    image: "./public/image39.jpeg",
  },

  // Cables
  {
    id: 40,
    name: "USB to Micro USB Cable",
    price: 50.49,
    category: "electronics",
    description: "Data and charging cable.",
    image: "./public/image40.jpeg",
  },
  {
    id: 41,
    name: "USB to Type-C Cable",
    price: 70.99,
    category: "electronics",
    description: "Type-C charging and data cable.",
    image: "./public/image41.jpeg",
  },

  // Switches
  {
    id: 42,
    name: "Push Button Switch",
    price: 1.29,
    category: "electronics",
    description: "Momentary push button switch.",
    image: "./public/image42.jpeg",
  },
  {
    id: 43,
    name: "Toggle Switch",
    price: 1.79,
    category: "electronics",
    description: "Mini toggle switch ON/OFF.",
    image: "./public/image43.jpeg",
  },

  // Misc
  {
    id: 44,
    name: "Heat Shrink Tubing Kit",
    price: 5.99,
    category: "electronics",
    description: "Assorted heat shrink tubes.",
    image: "./public/image44.jpeg",
  },
  {
    id: 45,
    name: "Solder Wire 60/40",
    price: 10.99,
    category: "electronics",
    description: "Solder wire roll for electronics work.",
    image: "./public/image45.jpeg",
  },
  {
    id: 46,
    name: "Proto PCB Board",
    price: 10.99,
    category: "electronics",
    description: "General purpose PCB for soldering components.",
    image: "./public/image46.jpeg",
  },
  {
    id: 47,
    name: "Heat Sink Small",
    price: 5.49,
    category: "electronics",
    description: "Aluminum heat sink for ICs and transistors.",
    image: "./public/image47.jpeg",
  },
  {
    id: 48,
    name: "Cooling Fan 12V",
    price: 2.99,
    category: "electronics",
    description: "Small DC fan for cooling projects.",
    image: "./public/image48.jpeg",
  },
  {
    id: 49,
    name: "Crystal Oscillator 16MHz",
    price: 2.49,
    category: "electronics",
    description: "16MHz crystal oscillator for microcontrollers.",
    image: "./public/image49.jpeg",
  },
  {
    id: 50,
    name: "EEPROM AT24C32",
    price: 50.99,
    category: "electronics",
    description: "32Kbit I2C EEPROM storage chip.",
    image: "./public/image50.jpeg",
  },
];

let filteredProducts = [...products];

// Initialize shop
document.addEventListener("DOMContentLoaded", function () {
  displayProducts(products);
  setupSearch();
});

// Display products
function displayProducts(productsToShow) {
  const productsGrid = document.getElementById("productsGrid");
  if (!productsGrid) return;

  if (productsToShow.length === 0) {
    productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
    return;
  }

  productsGrid.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}"/>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" onclick="addToCart(${
                  product.id
                }, '${product.name}', ${product.price}, '${product.image}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Filter products by category
function filterProducts(category) {
  // Update active filter button
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Filter products
  if (category === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  displayProducts(filteredProducts);
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      searchProducts(e.target.value);
    });

    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchProducts(e.target.value);
      }
    });
  }
}

function searchProducts(query = null) {
  const searchInput = document.getElementById("searchInput");
  const searchTerm =
    query || (searchInput ? searchInput.value.toLowerCase().trim() : "");

  if (!searchTerm) {
    displayProducts(filteredProducts);
    return;
  }

  const searchResults = filteredProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );

  displayProducts(searchResults);

  // Show search feedback
  if (searchResults.length === 0) {
    showToast(`No products found for "${searchTerm}"`, "error");
  } else {
    showToast(
      `Found ${searchResults.length} product(s) for "${searchTerm}"`,
      "success"
    );
  }
}
