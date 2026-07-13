document.addEventListener("DOMContentLoaded",()=>{
    const container=document.getElementById("sidebar-container");
    if(!container)return;

    fetch("/components/sidebar.html")
        .then(response=>response.text())
        .then(html=>{
            container.innerHTML=html;

            const currentPage=window.location.pathname.split("/").pop();

            document.querySelectorAll(".raahi-nav-link").forEach(link=>{
                if(link.getAttribute("href")===currentPage){
                    link.classList.add("active");
                }
                const logoutButton = document.querySelector(".raahi-logout");

                if (logoutButton) {
                    logoutButton.addEventListener("click", (e) => {
                        e.preventDefault();
                        localStorage.clear();
                        sessionStorage.clear();
                        window.location.href = "index.html";
                    });
                }
            });
        })
        .catch(error=>console.error(error));
});