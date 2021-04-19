const { SoundPlayer } = require('../src/automatic/sound-player');
const SoundPlayerConsumer = require('../src/automatic/sound-player-consumer');
jest.mock('../src/automatic/sound-player');

beforeEach(() => {
  SoundPlayer.mockClear();
});

it('Automatic mock', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  console.log('Printing SoundPlayer.mock.instances');
  console.log(SoundPlayer.mock.instances);

  expect(SoundPlayer.mock.instances[0].playSoundFile).toHaveBeenCalledWith(coolSoundFileName);
});