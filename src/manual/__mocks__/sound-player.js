const mockPlaySoundFile = jest.fn();
const SoundPlayer = jest.fn().mockImplementation(() => {
  return { playSoundFile: mockPlaySoundFile };
});

module.exports = {
  SoundPlayer,
  mockPlaySoundFile,
};