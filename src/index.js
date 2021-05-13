import "./styles/styles.scss";
import { emailData } from "./data";
const inboxMails = document.getElementById("inbox-mails");
const mailContent = document.getElementById("mail-content");
const sender = document.getElementById("sender");
const inbox = document.getElementById("inbox");
const inboxText = document.getElementById("inbox-text");

let inboxCount = document.createElement("span");
inboxCount.innerText = ` Inbox (${emailData().length})`;
inbox.append(inboxCount);

// functions

const inboxitem = (title, date, sender, attachment) => {
  let inboxContent = document.createElement("div");
  let read = document.createElement("div");
  read.classList.add("read-indicator");
  inboxContent.classList.add("inbox-content");
  let titleDate = document.createElement("div");
  let senderAttach = document.createElement("div");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h5");
  let p = document.createElement("p");
  let img = document.createElement("img");
  h4.innerText = title;
  (h5.innerText = date),
    (p.innerText = sender),
    (img.src = attachment.length > 0 ? "../src/icons/attachments.svg" : "");
  titleDate.append(h4, h5);
  senderAttach.append(p, img);
  inboxContent.append(read, titleDate, senderAttach);
  return inboxContent;
};

const senderItems = (src, name, email) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = src;
  let h5 = document.createElement("h5");
  h5.innerText = name;
  let p = document.createElement("p");
  p.innerText = email;
  div.append(img, h5, p);
  return div;
};

const mailItems = (
  title,
  src,
  senderName,
  email,
  date,
  body,
  atpic,
  attachment
) => {
  let h1 = document.createElement("h1");
  h1.innerText = title;
  let heading = document.createElement("div");
  heading.classList.add("mail-content-heading");
  let sender = document.createElement("div");
  sender.setAttribute("class", "sender clearfix");
  let img = document.createElement("img");
  img.src = src;
  let h5 = document.createElement("h5");
  h5.innerText = senderName;
  let mail = document.createElement("p");
  mail.innerText = `from: ${email}`;
  sender.append(img, h5, mail);
  let datep = document.createElement("p");
  datep.innerText = date;
  heading.append(sender, datep);

  let mailBody = document.createElement("div");
  mailBody.classList.add("mail-content-body");
  let bodyp = document.createElement("p");
  bodyp.innerText = body;
  mailBody.append(bodyp);

  let mailAttachment = document.createElement("div");
  mailAttachment.classList.add("mail-content-attachment");
  let attachimg = document.createElement("img");
  attachimg.src = `../src/icons/${atpic}.svg`;
  let attachname = document.createElement("p");
  attachname.innerText = attachment;
  mailAttachment.append(attachimg, attachname);
  mailContent.append(h1, heading, mailBody, mailAttachment);
  if (attachment.length > 0) {
    mailAttachment.classList.remove("hide");
  } else {
    mailAttachment.classList.add("hide");
  }
  return mailContent;
};

// Mailbox

inbox.addEventListener("click", () => {
  inboxText.innerText = "Inbox";
  inboxMails.classList.remove("hide");
});

document.getElementById("sent-mail").addEventListener("click", () => {
  inboxText.innerText = "Sent Mail";
  inboxMails.classList.add("hide");
});

document.getElementById("drafts").addEventListener("click", () => {
  inboxText.innerText = "Drafts";
  inboxMails.classList.add("hide");
});

document.getElementById("trash").addEventListener("click", () => {
  inboxText.innerText = "Trash";
  inboxMails.classList.add("hide");
});

document.getElementById("attachments").addEventListener("click", () => {
  inboxText.innerText = "Attachments";
  inboxMails.classList.add("hide");
});

// Loading Inbox data

emailData().forEach((item) => {
  inboxMails.append(
    inboxitem(item.title, item.date, item.sender, item.attachment)
  );
});

const inboxContent = document.querySelectorAll(".inbox-content");


// Loading mail data

inboxContent.forEach((item, index) => {
  item.addEventListener("click", () => {
    mailContent.innerHTML = "";
    sender.innerHTML = "";
    item.children[0].classList.add("hide");

    sender.append(
      senderItems(
        emailData()[index].pic,
        emailData()[index].sender,
        emailData()[index].email
      )
    );
    mailContent.append(
      mailItems(
        emailData()[index].title,
        emailData()[index].pic,
        emailData()[index].sender,
        emailData()[index].email,
        emailData()[index].date,
        emailData()[index].body,
        emailData()[index].type,
        emailData()[index].attachment
      )
    );
  });
});

// initial display

sender.append(
  senderItems(emailData()[0].pic, emailData()[0].sender, emailData()[0].email)
);

mailContent.append(
  mailItems(
    emailData()[0].title,
    emailData()[0].pic,
    emailData()[0].sender,
    emailData()[0].email,
    emailData()[0].date,
    emailData()[0].body,
    emailData()[0].type,
    emailData()[0].attachment
  )
);
