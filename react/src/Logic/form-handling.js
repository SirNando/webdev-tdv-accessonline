function extractFormData(formData) {
    const formDataObject = {};
  formData.forEach((value, key) => {
    const [section, fieldName] = key.split("_");

    // Check if the section already exists in formDataObject
    if (!formDataObject[section]) {
      formDataObject[section] = {};
    }

    // If the field already exists, convert it to an array
    if (formDataObject[section][fieldName] !== undefined) {
      if (!Array.isArray(formDataObject[section][fieldName])) {
        formDataObject[section][fieldName] = [
          formDataObject[section][fieldName],
        ];
      }
      formDataObject[section][fieldName].push(value);
    } else {
      formDataObject[section][fieldName] = value;
    }
  });

  return formDataObject;
}

export default extractFormData