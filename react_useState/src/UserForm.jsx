import { useState } from 'react';

export default function UserForm() {
  // Використовуємо один об'єкт для зберігання всього стану форми
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    groupCode: '',
    email: ''
  });

  // Універсальна функція для оновлення стану при введенні тексту
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value // Оновлюємо лише те поле, яке змінилося
    }));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h2>Форма користувача</h2>
      
      {/* Форма для введення даних */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Ім'я"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
        <input
          type="text"
          name="surname"
          placeholder="Прізвище"
          value={formData.surname}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
        <input
          type="text"
          name="groupCode"
          placeholder="Код групи"
          value={formData.groupCode}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Електронна пошта"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
      </form>

      {/* Відображення введених даних */}
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h3>Введені дані:</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><strong>Ім'я:</strong> {formData.name}</li>
          <li><strong>Прізвище:</strong> {formData.surname}</li>
          <li><strong>Код групи:</strong> {formData.groupCode}</li>
          <li><strong>Email:</strong> {formData.email}</li>
        </ul>
      </div>
    </div>
  );
}