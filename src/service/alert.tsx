/* eslint-disable @typescript-eslint/no-unused-vars */
import Swal from "sweetalert2";

function showAlertWithTimeout(value: unknown) {
  // Create a promise that resolves after a specific time (e.g., 3000 milliseconds)
  const timeoutPromise = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000); // Adjust the timeout duration as needed
  });

  // Show SweetAlert2 with a timer
  if (value == "Add") {
    Swal.fire({
      title: "Added successfully",
      width: 300,
      padding: "3em",
      color: "#716add",
      background: `#fff url("https://sweetalert2.github.io/images/trees.png")`,
      backdrop: `
      rgba(0,0,20,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat`,
      timer: 3000, // Timeout duration in milliseconds (same as the promise)
      timerProgressBar: true, // Show a progress bar for the timer
      showConfirmButton: false, // Hide the confirm button
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Deleted successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  // When the timerPromise resolves, close the alert
  timeoutPromise.then(() => {
    Swal.close();
  });
}

export { showAlertWithTimeout };
