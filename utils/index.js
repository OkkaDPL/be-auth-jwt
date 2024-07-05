export function isNull(val, field) {
  if (val === "" || val === null || val === undefined || val.trim() === "") {
    throw new Error(`${field} tidak boleh kosong.`);
  } else {
    return false;
  }
}
