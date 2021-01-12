class Converters {
  static toReadableStatus(status) {
    switch (status) {
      case 'new':
        return 'Новое';
      case 'in_progress':
        return 'В процессе';
      case 'done':
        return 'Выполнено';
      default:
        return 'Неизвестный статус';
    }
  }
}

export default Converters;
