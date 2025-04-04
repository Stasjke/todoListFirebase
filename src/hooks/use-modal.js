import { useState } from 'react';

const useModal = () => {
  const [modalAddCase, setModalAddCase] = useState(false);
  const [modalEditCase, setModalEditCase] = useState(false);
  const [caseTitle, setCaseTitle] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const handleInputChange = (event) => {
    setCaseTitle(event.target.value);
  };

  const handleEditInputChange = (event) => {
    setEditTitle(event.target.value);
  };

  const requestAddCase = () => {
    setModalAddCase(true);
    setModalEditCase(false);
    setCaseTitle('');
  };

  const requestEditCase = (id, title) => {
    setModalEditCase(true);
    setModalAddCase(false);
    setSelectedTodoId(id);
    setEditTitle(title);
  };
  return {
    modalAddCase,
    modalEditCase,
    caseTitle,
    editTitle,
    selectedTodoId,
    setModalAddCase,
    setModalEditCase,
    setCaseTitle,
    setEditTitle,
    setSelectedTodoId,
    handleInputChange,
    handleEditInputChange,
    requestAddCase,
    requestEditCase,
  };
};

export default useModal;

