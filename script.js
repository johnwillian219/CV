document.getElementById("download-btn").addEventListener("click", () => {
  const element = document.getElementById("cv");
  const opt = {
    margin: 0,
    filename: "John_William_CV.pdf",
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: true, // Adicione esta linha
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  // Adicione um timeout para garantir que os ícones sejam carregados
  setTimeout(() => {
    html2pdf()
      .set(opt)
      .from(element)
      .toPdf()
      .get("pdf")
      .then(function (pdf) {
        const totalPages = pdf.internal.getNumberOfPages();
        if (totalPages > 1) {
          pdf.deletePage(totalPages);
          pdf.setPage(1);
        }
      })
      .save();
  }, 1000);
});
