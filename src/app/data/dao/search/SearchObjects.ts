// все возможные параметры поиска категорий
export class CategorySearchValues {
    text: string = null;
}

// все возможные параметры поиска категорий
export class TaskSearchValues {

    //значения по-умолчанию
    title = '';
    completed: number = null;
    priorityId: number = null;
    categoryId: number = null;
    pageNumber = 0; // 1-я страница
    pageSize = 5; // сколько элементов на странице

    // сортировка
    sortColumn = 'title';
    sortDirection = 'asc';

}