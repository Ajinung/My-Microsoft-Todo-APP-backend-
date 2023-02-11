export interface taskData {
  title: string;
  date: string;
  reminder: string;
  note: string;
  status: boolean;
  receiver: string;
  sender: string;
}

export interface userDetails {
  name: string;
  email: string;
  password: string;
  myDay: any[];
  important: any[];
  planned: any[];
  assigned: any[];
  task: any[];
}
