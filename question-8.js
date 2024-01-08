// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getUserNames() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!res.ok) throw new Error("Network response was not ok.");
    const users = await res.json();
    const userNames = users.map((name) => name.name);
    console.log(userNames);
  } catch (error) {
    console.error("There was a problem fetching the user data:", error);
  }
}

getUserNames();
