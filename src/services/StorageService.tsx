export class StorageService {
  static getUserName(): string | null {
    return localStorage.getItem("userName");
  }

  static getRole(): string | null {
    return localStorage.getItem("role");
  }

  static getUserProfileImage(): string | null {
    return localStorage.getItem("userProfileImage");
  }

  static getMedicalCenterEmail(): string | null {
    return localStorage.getItem("medicalCenterEmail");
  }

  static getCenterId(): string | null {
    return localStorage.getItem("centerId");
  }

  static getMedicalCenterName(): string | null {
    return localStorage.getItem("medicalCenterName");
  }

  static getMedicalCenterProfileImage(): string | null {
    return localStorage.getItem("medicalCenterProfileImage");
  }
}
