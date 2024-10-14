// Sistema de notificação
function addNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;

    // Criação da barra de progresso
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const progress = document.createElement("div");
    progress.classList.add("progress");
    progressBar.appendChild(progress);
    notification.appendChild(progressBar);

    document.getElementById("notification-container").appendChild(notification);

    // Iniciar a animação da barra de progresso
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            notification.remove();
        } else {
            width++;
            progress.style.width = width + "%";
        }
    }, 30); // Aumente ou diminua a duração da animação ajustando o intervalo
}
