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

async function createClient(formData) {
  let response;

  try {
    response = await fetch("http://localhost:3000/accessOnline/client/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.error(error);
    return false;
  }

  if (response.ok) {
    return true;
  } else {
    return false;
  }
}

async function getClient(id) {
  let response;

  try {
    response = await fetch(`http://localhost:3000/accessOnline/client/${id}`, {
      method: "GET",
    });
  } catch (error) {
    console.error(error);
    return false;
  }

  const responseData = response.json();
  if (response.ok) {
    return responseData;
  } else {
    return null;
  }
}

export { extractFormData, createClient, getClient };
