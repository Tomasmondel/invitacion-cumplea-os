const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

/* ABRIR CARTA */
envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        invitation.classList.remove("hidden");
        lanzarConfetti();
    }, 800);
});

/* UBICACION */
function verUbicacion() {
    window.open("https://maps.app.goo.gl/wzMbusg3YkEKVnsz9", "_blank");
}

/* WHATSAPP */
function confirmar() {
    const mensaje = "Hola! Confirmo asistencia al cumple 🎉";
    const numero = "+549115697-8788"; // CAMBIAR
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`);
}

/* CONFETTI SIMPLE */
function lanzarConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let piezas = [];

    for (let i = 0; i < 80; i++) {
        piezas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 6 + 4,
            speed: Math.random() * 2 + 1
        });
    }

    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        piezas.forEach(p => {
            ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
            ctx.fillRect(p.x, p.y, p.size, p.size);

            p.y += p.speed;

            if (p.y > canvas.height) {
                p.y = 0;
            }
        });

        requestAnimationFrame(animar);
    }

    animar();
}