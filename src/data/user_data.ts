export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    username: string;
    password: string;
  }
  
  export const dataUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', username: 'admin', password: '1234' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', username: 'user1', password: '1234' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', username: 'user2', password: '1234' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', username: 'manager1', password: '1234' },
    { id: 5, name: 'Little Boy', email: 'little@example.com', role: 'Manager', username: 'manager2', password: '1234' },
  ];