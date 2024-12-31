
        const sections = document.querySelectorAll('section');
        const aiPage = document.getElementById('ai-page');
        const aiLink = document.getElementById('ai-link');

        // إظهار صفحة الذكاء الاصطناعي وإخفاء باقي الأقسام
        aiLink.addEventListener('click', function(e) {
            e.preventDefault();
            sections.forEach(section => {
                if (section.id !== 'ai-page') {
                    section.classList.add('hidden');
                }
            });
            aiPage.style.display = 'block';
        });

        // إظهار الأقسام وإخفاء صفحة الذكاء الاصطناعي عند الضغط على أي زر آخر
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-target');
                sections.forEach(section => section.classList.remove('hidden'));
                aiPage.style.display = 'none';
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });


        //من هنا الصور البرمجية


        let currentIndex = 0;
        const images = document.getElementById("slider");
        const dots = document.querySelectorAll(".dot");
        const totalImages = 5;
        let autoSlideInterval;
        let autoSlideTimeout;

        // Update slider position and dots
        function updateSliderPosition() {
            images.style.transform = `translateX(-${currentIndex * 500}px)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
        }

        // Move slide in the given direction
        function moveSlide(direction) {
            currentIndex = (currentIndex + direction + totalImages) % totalImages;
            updateSliderPosition();
        }

        // Handle manual slide and pause auto-slide for 4 seconds
        function manualSlide(direction) {
            moveSlide(direction);
            restartAutoSlide(4000);
        }

        // Go to a specific slide and pause auto-slide for 4 seconds
        function manualGoToSlide(index) {
            currentIndex = index;
            updateSliderPosition();
            restartAutoSlide(4000);
        }

        // Swipe functionality
        let startX = 0;

        document.getElementById("sliderContainer").addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            stopAutoSlide();
        });

        document.getElementById("sliderContainer").addEventListener("touchend", (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = endX - startX;

            if (diff > 50) {
                manualSlide(-1); // Swipe right
            } else if (diff < -50) {
                manualSlide(1); // Swipe left
            }
        });

        // Auto-slide every 1 second
        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                moveSlide(1);
            }, 2199);
        }

        // Stop auto-slide
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
            clearTimeout(autoSlideTimeout);
        }

        // Restart auto-slide after a delay
        function restartAutoSlide(delay) {
            stopAutoSlide();
            autoSlideTimeout = setTimeout(() => {
                startAutoSlide();
            }, delay);
        }

        // Initialize auto-slide
        startAutoSlide();

        //الى هنا الصور البرمجية



        //من هنا الصور الاخرى

        let currentIndexAlt = 0;
        const imagesAlt = document.getElementById("sliderAlt");
        const dotsAlt = document.querySelectorAll(".dot-alt");
        const totalImagesAlt = 5;
        let autoSlideIntervalAlt;
        let autoSlideTimeoutAlt;

        function updateSliderPositionAlt() {
            imagesAlt.style.transform = `translateX(-${currentIndexAlt * 500}px)`;
            dotsAlt.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndexAlt);
            });
        }

        function moveSlideAlt(direction) {
            currentIndexAlt = (currentIndexAlt + direction + totalImagesAlt) % totalImagesAlt;
            updateSliderPositionAlt();
        }

        function manualSlideAlt(direction) {
            moveSlideAlt(direction);
            restartAutoSlideAlt(4000);
        }

        function manualGoToSlideAlt(index) {
            currentIndexAlt = index;
            updateSliderPositionAlt();
            restartAutoSlideAlt(3000);
        }

        let startXAlt = 0;

        document.getElementById("sliderContainerAlt").addEventListener("touchstart", (e) => {
            startXAlt = e.touches[0].clientX;
            stopAutoSlideAlt();
        });

        document.getElementById("sliderContainerAlt").addEventListener("touchend", (e) => {
            const endXAlt = e.changedTouches[0].clientX;
            const diffAlt = endXAlt - startXAlt;

            if (diffAlt > 50) {
                manualSlideAlt(-1);
            } else if (diffAlt < -50) {
                manualSlideAlt(1);
            }
        });

        function startAutoSlideAlt() {
            autoSlideIntervalAlt = setInterval(() => {
                moveSlideAlt(1);
            }, 2199);
        }

        function stopAutoSlideAlt() {
            clearInterval(autoSlideIntervalAlt);
            clearTimeout(autoSlideTimeoutAlt);
        }

        function restartAutoSlideAlt(delay) {
            stopAutoSlideAlt();
            autoSlideTimeoutAlt = setTimeout(() => {
                startAutoSlideAlt();
            }, delay);
        }

        startAutoSlideAlt();

        //الى هنا الصور 


        const canvas = document.getElementById("animated-lines");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const lines = [];
        const lineCount = 50;
        const colors = ["#ff007a", "#6200ea", "#03dac5", "#bb86fc", "#3700b3"];

        class Line {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.speedX * 50, this.y + this.speedY * 50);
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
        }

        // Initialize lines
        for (let i = 0; i < lineCount; i++) {
            lines.push(new Line());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            lines.forEach(line => {
                line.draw();
                line.update();
            });

            requestAnimationFrame(animate);
        }

        animate();