export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "coderbackend-62953",
        "private_key_id": "838f434750b3f9c85bbe81ea8fc8710d229117b1",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyKwKGXn1Wljnd\nVKwVpP12R47jUHqjAjJY0jWdwAvhGbiOTF1ureIh4AuEuamueGFg0GmqY9k40J9T\nCjSNjmylsCnaz5SpusId4hz2R5p9sSzGAplGdj0GivBPcrViVuLzS/orNgiQelMS\nVZaf+jtvBXRUA+hL0jifs6Lfyo8p0KEJIUFJ5Rj8IK2VGf4mNnizQvkhYDfUpRg7\nHpdYdFZ85ZOYZ+BhkTRb7PM7IGQzPvKsltJiyznuLex8SwVf6jgp0VXcinWrrtrJ\nu9ViNwo+oTc+0H52TI2EguxTV3Km7T2F5yXAeCpldE8sVlfcuS0w95dXK4mmBANl\nVNJGLFDDAgMBAAECggEADg7MtTNxakqSKD+NEGwjP5jn0lHAS2pZ9J4pctf7V/iC\nkl++I4R+yjN2VTOdCtIexNfM7o/QTOZRG+k7OkwZkH004DnuvfGpbVgw9tGxg+dd\n5AXCeEfOCt0dlvczDp5Sa+X7yDsMM/Ii6dhs+RRyahEhG5vvUUQ2CYvP9x5xa1gT\ntizyyJkvwiFPLNS1VLqV49kGWBeO1L4H8FKrr6zMOfl+NdaAlzaXBZWAl67//hVN\n7Fh3/xRwru0FL0QU0g3Mlj/OqKNyA1i0mLMB91rV+q3rR5j1cG2QiKe7NAptoqVP\nTgmIquYyK6D/TBvAm/wsa0UXxlyygs1T3KTgbO/QOQKBgQD4atpWvLvZWIKLlNog\nwKxz8dbEbmQ+bJrjzPmRBkphJzawPVLOrHncaK3s+iL469Da1mJduiYnHqI9/AKS\n3Uh6xenyCCZhSewSjUy8bOY++OrM/Q9MwUn/4kT32iAfamGtcmNvxMY+56DAKoXa\nuqUifkabdEIsQJjyEG7iEoSTLwKBgQC3mzlzzo+pH2GreX9fxqz9QjG6j1gcPo9Y\nNMkXCYNsED0pZEFbSeZen//LoOem7kDknU1XOXr0ceSwhEemomJwNOb/mw6Mi5us\nsLIYyrMyd/eRcNLqcpJSta9h2G+hZ3hn9V9v3Cp3NWO57J99sNE8rZEZa2DuISgA\npjOPxYpGrQKBgGA9lWUxLV2g6sKE4pT50FYDBX+IfRGqJb/Hc5B57WsCNC/HMkOb\nkoKPk4JRzia9xWZi1C0XpxxUw+pbreuUCzZ1YpNAEQ50Ax+U2nvNfM48xUqxZ7IG\n2FJoKOwU94j0P+9gd6GfjGZmemK4lq8MzFk2rsgfHFvkktyE/VBceDxFAoGBALM3\nXrL9cxjfutRHud7g7MYgMK4rcRPQtNaiX46PCKsYhrq6U1kqHyVKA8LdgoBcmxcL\nvAxh3PRxn4n09INgibmAyeHBlkf1lbTQnGa6pIOkuhBLEnUp9E2rbk+RlhT0DIFc\n7xUe0IyfnoJCx8NGLlaODM3FFE4cKxHHKRky9q/ZAoGBAMkeUDHosWCcdbmPn1b3\na0MsPvI2iJ5ahoU1YITC+DgPjqaLYbBTv/x8pptZfxcLlvYFKVP/NwhXuCJBg/bW\noxsUo/+v6t0A6ATfrQqR1NKSZ9qZ2TDbRzAo8jV8QzS96IgFTWOZWL10Xqdl+Y17\nKJyqq9BsFX7IknMwqtmrXl98\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-mrbea@coderbackend-62953.iam.gserviceaccount.com",
        "client_id": "101951209553098038807",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mrbea%40coderbackend-62953.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
