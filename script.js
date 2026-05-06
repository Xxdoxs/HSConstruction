document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Fade-up Animation Observer
  const fadeUpElements = document.querySelectorAll('.fade-up');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeUpElements.forEach(el => fadeObserver.observe(el));

  // Stats Counter Animation
  const counters = document.querySelectorAll('.counter');
  const statsContainer = document.getElementById('statsContainer');
  let started = false;

  const startCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // ms
      const step = target / (duration / 16); // 60fps

      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  };

  if (statsContainer) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          startCounters();
        }
      });
    }, { threshold: 0.5 });
    statsObserver.observe(statsContainer);
  }

  // Calculator Logic
  const calcForm = document.getElementById('calculatorForm');
  const calcResults = document.getElementById('calcResults');
  
  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Handle both index.html and services.html calculator versions
      const lengthEl = document.getElementById('calcLength');
      const widthEl = document.getElementById('calcWidth');
      const areaInputEl = document.getElementById('calcAreaInput');
      const packageEl = document.getElementById('calcPackage') || document.getElementById('calcPackageSelect');
      const floorsEl = document.getElementById('calcFloors');

      let builtUpArea = 0;
      if (areaInputEl) {
        builtUpArea = parseFloat(areaInputEl.value) || 0;
      } else if (lengthEl && widthEl) {
        const length = parseFloat(lengthEl.value) || 0;
        const width = parseFloat(widthEl.value) || 0;
        const floors = parseInt(floorsEl ? floorsEl.value : 1) || 1;
        builtUpArea = (length * width) * 0.75 * floors;
      }

      const pricePerSqft = parseInt(packageEl ? packageEl.value : 1890);
      const estimatedCost = builtUpArea * pricePerSqft;
      
      const formatLakhs = (num) => (num / 100000).toFixed(2);
      const formatCurrency = (num) => '₹' + Math.round(num).toLocaleString('en-IN');

      // Simple version elements (index.html)
      const resArea = document.getElementById('resArea');
      const resMin = document.getElementById('resMin');
      const resMax = document.getElementById('resMax');

      // Detailed version elements (services.html)
      const resTotal = document.getElementById('resTotal');
      const resAreaDisplay = document.getElementById('resAreaDisplay');
      const costCement = document.getElementById('costCement');
      const costSand = document.getElementById('costSand');
      const costAggregate = document.getElementById('costAggregate');
      const costSteel = document.getElementById('costSteel');
      const costFinishers = document.getElementById('costFinishers');
      const costFittings = document.getElementById('costFittings');
      
      const qtyCement = document.getElementById('qtyCement');
      const qtySand = document.getElementById('qtySand');
      const qtyAggregate = document.getElementById('qtyAggregate');
      const qtySteel = document.getElementById('qtySteel');
      const qtyPaint = document.getElementById('qtyPaint');
      const qtyBricks = document.getElementById('qtyBricks');

      // Update Simple Version
      if (resArea) resArea.innerText = Math.round(builtUpArea).toLocaleString() + ' sqft';
      if (resMin) resMin.innerText = `₹${formatLakhs(estimatedCost * 0.9)}L`;
      if (resMax) resMax.innerText = `₹${formatLakhs(estimatedCost * 1.1)}L`;

      // Update Detailed Version
      if (resTotal) {
        resTotal.innerText = formatCurrency(estimatedCost);
        if (resAreaDisplay) resAreaDisplay.innerText = `For ${Math.round(builtUpArea).toLocaleString()} sqft`;
        
        // Cost Breakdown (Thumb Rules)
        if (costCement) costCement.innerText = formatCurrency(estimatedCost * 0.164);
        if (costSand) costSand.innerText = formatCurrency(estimatedCost * 0.123);
        if (costAggregate) costAggregate.innerText = formatCurrency(estimatedCost * 0.074);
        if (costSteel) costSteel.innerText = formatCurrency(estimatedCost * 0.246);
        if (costFinishers) costFinishers.innerText = formatCurrency(estimatedCost * 0.165);
        if (costFittings) costFittings.innerText = formatCurrency(estimatedCost * 0.228);

        // Material Quantities (Thumb Rules per sqft)
        if (qtyCement) qtyCement.innerText = Math.round(builtUpArea * 0.4).toLocaleString('en-IN') + ' Bags';
        if (qtySand) qtySand.innerText = (builtUpArea * 0.816 / 1000).toFixed(2) + ' Tons';
        if (qtyAggregate) qtyAggregate.innerText = (builtUpArea * 0.608 / 1000).toFixed(2) + ' Tons';
        if (qtySteel) qtySteel.innerText = Math.round(builtUpArea * 4).toLocaleString('en-IN') + ' Kg';
        if (qtyPaint) qtyPaint.innerText = Math.round(builtUpArea * 0.18).toLocaleString('en-IN') + ' Liters';
        if (qtyBricks) qtyBricks.innerText = Math.round(builtUpArea * 8).toLocaleString('en-IN') + ' Pieces';
      }

      calcResults.style.display = 'block';
    });
  }

  // Pricing Accordion Logic
  const pkgRows = document.querySelectorAll('.pkg-row-header');
  pkgRows.forEach(header => {
    header.addEventListener('click', () => {
      const row = header.parentElement;
      const isActive = row.classList.contains('active');
      
      // Close all other pricing rows
      document.querySelectorAll('.pkg-row').forEach(r => r.classList.remove('active'));
      
      // Toggle current row
      if (!isActive) {
        row.classList.add('active');
      }
    });
  });

  // Accordion Logic (General)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all other items
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Portfolio Tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Hide mobile menu if open
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
});

// Roadmap Tabs Logic
window.switchRoadmapTab = function(tabIndex) {
  const tabs = document.querySelectorAll('.roadmap-tab');
  const contents = document.querySelectorAll('.roadmap-content');
  
  tabs.forEach((tab, index) => {
    if (index + 1 === tabIndex) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  
  contents.forEach((content, index) => {
    if (index + 1 === tabIndex) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
};
