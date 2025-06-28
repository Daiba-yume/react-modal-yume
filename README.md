# Modal Component

Un composant modal réutilisable pour les projets React.

## Installation

Pour installer ce package dans ton projet, utilise npm ou yarn :

```bash
npm install react-modal-yume
# ou
yarn add react-modal-yume
```

### Utilisation

import Modal from "react-modal-yume";

Le style des éléments `modalContent` et `overlay` peut être personnalisé via les props suivantes :

- `style` : styliser la fenêtre modale (modalContent)
- `overlayStyle` : styliser le fond (overlay)

### Exemple

```jsx
import { useState } from "react";
import Modal from "react-modal-yume";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Ouvrir la modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div>Votre contenu ici</div>
      </Modal>
    </>
  );
}
```

### Auteur

Daïba Yume :purple_heart:
