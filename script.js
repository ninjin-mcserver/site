const updatedDate = document.querySelector("#updated-date");
const copyButton = document.querySelector("[data-copy]");
const toast = document.querySelector(".toast");

// フッターの更新日を閲覧時点の日付にします。
if (updatedDate) {
  const now = new Date();
  updatedDate.dateTime = now.toISOString();
  updatedDate.textContent = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
    timeZone: "Asia/Tokyo",
  }).format(now);
}

// 画面下部に短い通知を表示します。
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

// Clipboard API が使えない環境では input を使ってコピーします。
async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("input");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

copyButton?.addEventListener("click", async () => {
  const value = copyButton.dataset.copy;
  try {
    await copyText(value);
    showToast("接続先をコピーしました");
  } catch {
    showToast(value);
  }
});
