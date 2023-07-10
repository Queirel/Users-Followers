export declare class TasksEntity {
    id: string;
    task_name: string;
    status: string;
    email: string;
    progress: string;
    must_start_date: Date;
    start_date: Date;
    must_completion_date: Date;
    completion_date: Date;
    mail_start_send: boolean;
    mail_completion_send: boolean;
}
