AOS.init();

const dataAniversario = new Date("Dec 1, 2024 9:00:00");
const timeStampData = dataAniversario.getTime();

const contaHoras = setInterval(function () {
  const data = document.getElementById("contador");
  const agora = new Date();
  const timeStampAgora = agora.getTime();

  const distanciaAteEvento = timeStampData - timeStampAgora;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
  const horasAteEvento = Math.floor(
    (distanciaAteEvento % diasEmMs) / horasEmMs
  );
  const minutosAteEvento = Math.floor(
    (distanciaAteEvento % horasEmMs) / minutosEmMs
  );
  const segundosAteEvento = Math.floor(
    (distanciaAteEvento % minutosEmMs) / 1000
  );

  data.innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

  if (distanciaAteEvento < 0) {
    clearInterval(contaHoras);
    data.innerHTML = "Até ano que vem!";
  }
}, 1000);
