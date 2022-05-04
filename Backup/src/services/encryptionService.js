import { NIFTRON } from "niftron-client-sdk";

// --- Asymmetric encryption/decryption --- //

export function asymmetricEncryption(field, toPublicKey, fromSecretKey) {
    const asymmetricEncryption = new NIFTRON.utils.asymmetricEncryption();
    const response = asymmetricEncryption.encrypt(
        field,
        toPublicKey,
        fromSecretKey
    );
    return response;
}

export function asymmetricDecryption(encryptionObject, toSecretKey) {
    const asymmetricEncryption = new NIFTRON.utils.asymmetricEncryption();
    const response = asymmetricEncryption.decrypt(encryptionObject, toSecretKey);
    return response;
}

// --- Symmetric encryption/decryption --- //

export function symmetricEncryption(field, fromSecretKey) {
    const response = NIFTRON.utils.symmetricEncryption.encrypt(
        field,
        fromSecretKey
    );
    return response;
}

export function symmetricDecryption(encryptedField, fromSecretKey) {
    const response = NIFTRON.utils.symmetricEncryption.decrypt(
        encryptedField,
        fromSecretKey
    );
    return response;
}

// --- Create data encryption object --- //

export function createEncryptionObject(
    encryptionType,
    field,
    toPublicKey,
    fromPublicKey,
    fromSecretKey
) {
    let encryptionObject = { encryptionType, toPublicKey, fromPublicKey };
    if (encryptionType === "SYMMETRIC") {
        encryptionObject.data = symmetricEncryption(field, fromSecretKey);
    }

    if (encryptionType === "ASYMMETRIC") {
        encryptionObject.data = asymmetricEncryption(
            field,
            toPublicKey,
            fromSecretKey
        );
    }

    if (encryptionType === "PUBLIC") {
        encryptionObject.data = field;
    }
    return encryptionObject;
}