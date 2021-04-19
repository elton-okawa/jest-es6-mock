const { SoundPlayer, mockPlaySoundFile } = require('../src/manual/sound-player');
const SoundPlayerConsumer = require('../src/manual/sound-player-consumer');
jest.mock('../src/manual/sound-player');

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

describe('Manual mock', () => {
  it('docs way', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
  
    expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  });

  it('expected behavior', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
  
    console.log('Printing SoundPlayer.mock.instances');
    console.log(SoundPlayer.mock.instances);
  
    expect(SoundPlayer.mock.instances[0].playSoundFile).toHaveBeenCalledWith(coolSoundFileName);
  });
});
