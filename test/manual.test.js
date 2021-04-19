const { SoundPlayer, mockPlaySoundFile } = require('../src/manual/sound-player');
const SoundPlayerConsumer = require('../src/manual/sound-player-consumer');
jest.mock('../src/manual/sound-player');

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

it('Manual mock', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);

  console.log('Printing SoundPlayer.mock.instances');
  console.log(SoundPlayer.mock.instances);
});