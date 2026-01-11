flowchart TD
    A[App Launch] --> B{New or Returning User?}

    B -->|New User| C[Registration: Basic Info]
    C --> D[Registration: Password Setup]
    D --> E[Registration: Physical Stats]
    E --> F[Registration: Goals & Preferences]
    F --> G[Account Created]
    G --> H[Main Hub]

    B -->|Returning User| I[Login]
    I -->|Forgot Password| J[Password Recovery]
    I -->|Success| H[Main Hub]

    H --> K[Dashboard]
    H --> L[Edit Profile]
    H --> M[Info]

    K --> K1[View Meal Plan]
    K --> K2[View Grocery Prices]
    K --> K3[Regenerate Meal Plan]
    K3 --> K

    L --> L1[Save Changes]
    L1 -->|Minor Change| H
    L1 -->|Major Change| K

    M --> H
