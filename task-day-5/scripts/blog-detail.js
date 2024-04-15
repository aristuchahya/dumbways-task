let selectedProject = JSON.parse(localStorage.getItem("selectedProject"));

document.getElementById("detail-blog").innerHTML = `
<h1>${selectedProject.project}</h1>
      <div class="wrapper-detail">
        
        <img
          src="${selectedProject.img}"
          alt="gambar-detail"
        />
        
        <div class="time-detail">
        <div class="duration-detail">
          <h2>Duration</h2>
          <p><i class="fa-regular fa-calendar-days"></i>${
            selectedProject.start
          } - ${selectedProject.end}</p>
          <p><i class="fa-regular fa-clock"></i>${selectedProject.duration}</p>
        </div>

        <div class="tech-detail">
          <h2>Technologies</h2>
          <p> ${
            selectedProject.tech1
              ? "<i class='fa-brands fa-node-js'></i> Node Js "
              : ""
          } ${
  selectedProject.tech2 ? "<i class='fa-brands fa-react'></i> React Js " : ""
} ${
  selectedProject.tech3 ? "<i class='fa-brands fa-react'></i> Next Js " : ""
} ${
  selectedProject.tech4
    ? "<i class='fa-brands fa-node-js'></i> Typescript "
    : ""
}</p>
        </div>
        </div>

      </div>
      <div class="desc-detail">
        <p>${selectedProject.desc}</p>
        </div>
`;

console.log(selectedProject);
