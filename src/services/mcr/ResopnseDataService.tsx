import Swal from "sweetalert2";

export class ResopnseDataService {
  static showSuccessAlert(title: string) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: title,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  static showErrorAlert(title: string) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: title,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
