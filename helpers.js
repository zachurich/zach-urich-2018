/**
 * Mainly stuff I don't want distracting me in my
 * components
 */

export const dummyData = amount => {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push({ id: i });
  }
  return arr;
};

if (typeof window !== "undefined") {
  window.dummyData = dummyData;
}

export const hoverTransitionEffect = {
  init() {
    this.hoverPill = document.querySelector(".hoverPill");
    this.items = document.querySelector(".items");
    this.allLinks = document.querySelectorAll(".nav .item");
    this.start = this.allLinks[0]
      ? this.allLinks[0].getBoundingClientRect()
      : null;

    this.allLinks.forEach((link, i) => {
      this.linkStart(this.start);
      link.addEventListener("mouseover", () => {
        if (link.classList.contains("hover-cancel")) {
          link.classList.remove("hover-cancel");
        }
        this.linkTrack(link);
      });
      link.addEventListener("mouseleave", () =>
        link.classList.remove("active")
      );
      link.addEventListener("click", () => {
        link.classList.add("hover-cancel");
        this.linkLeave(link);
      });
      this.items.addEventListener("mouseleave", () => this.linkLeave(link));
    });
  },
  linkStart(rect) {
    this.hoverPill.opacity = 0;
    this.hoverPill.style.width = `${rect.width}px`;
    this.hoverPill.style.height = `${rect.height - 20}px`;
    this.hoverPill.style.lineHeight = `${rect.height - 20}px`;
    this.hoverPill.style.transform = `translate(${rect.x - 2}px, ${rect.y +
      5}px)`;
  },
  linkTrack(el) {
    const rect = el.getBoundingClientRect();
    el.classList.add("active");
    this.hoverPill.style.width = `${rect.width}px`;
    this.hoverPill.style.height = `${rect.height - 20}px`;
    this.hoverPill.style.lineHeight = `${rect.height - 20}px`;
    this.hoverPill.style.transform = `translate(${rect.x - 2}px, ${rect.y +
      5}px)`;
    this.hoverPill.style.opacity = "1";
  },
  linkLeave(el) {
    const rect = el.getBoundingClientRect();
    el.classList.remove("active");
    this.hoverPill.style.opacity = "0";
  }
};

// Provide a ms duration and scroll to the top!
export const scrollToTop = scrollDuration => {
  const scrollHeight = window.scrollY,
    scrollStep = Math.PI / (scrollDuration / 15),
    cosParameter = scrollHeight / 2;
  var scrollCount = 0,
    scrollMargin,
    scrollInterval = setInterval(() => {
      if (window.scrollY != 0) {
        scrollCount = scrollCount + 1;
        scrollMargin =
          cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, scrollHeight - scrollMargin);
      } else clearInterval(scrollInterval);
    }, 15);
};

export const formatTitle = path => {
  if (path != "/" && path.indexOf("contact") < 1) {
    const title = path.split("/").pop();
    const firstLetter = title.charAt(0).toUpperCase();
    return `/ ${firstLetter}${title.slice(1)}`;
  } else {
    return "";
  }
};

export const parallax = selectors => {
  selectors.forEach((selector, i) => {
    let el = document.querySelector(selector);
    window.addEventListener("scroll", () => {
      if (el !== null) {
        el.style.animation = "none";
        el.style.transform = `translateY(${window.scrollY / 12 + i * 2}px)`;
        el.style.opacity = `${1 - window.scrollY / 300}`;
      }
    });
  });
};

// ew
export function formatDate(ts) {
  const dateObj = new Date(ts);
  const dateStr = dateObj.toDateString();
  const dateArr = dateStr.split(" ");
  dateArr.shift();
  dateArr[1] = dateArr[1] + ", ";
  return dateArr.join(" ");
}

export function getRandomIndex(arr) {
  const random = arr[Math.floor(Math.random() * arr.length)];
  return random;
}
