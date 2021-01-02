class Converters {
  static toReadableStatus(status) {
    switch (status) {
      case 'new':
        return 'New';
      case 'in_progress':
        return 'In progress';
      case 'done':
        return 'Done';
      default:
        return 'Unknown status';
    }
  }
}

export default Converters;
