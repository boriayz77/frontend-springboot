import {Priority} from '../../../model/Priority';
import {CommonDAO} from './CommonDAO';

// специфичные методы для работы приоритетами (которые не входят в обычный CRUD)
export interface PriorityDAO extends CommonDAO<Priority> {

    // пока нету поиска(не нужон он мне)

}
