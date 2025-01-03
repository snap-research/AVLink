# AV-Link: Temporally-Aligned Diffusion Features for Cross-Modal Audio-Video Generation
[![Project Page](https://img.shields.io/badge/Project-Page-green.svg)](https://snap-research.github.io/AVLink/)
[![arXiv](https://img.shields.io/badge/arXiv-2311.18822-b31b1b)](#TODO)


https://github.com/user-attachments/assets/02572988-4db4-4913-b543-4c914d14b9c0


# AV-Link: Temporally-Aligned Diffusion Features for Cross-Modal Audio-Video Generation
<div align="justify">
<b>Abstract</b>: We propose AV-Link, a unified framework for Video-to-Audio and Audio-to-Video generation that leverages the activations of frozen video and audio diffusion models for temporally-aligned cross-modal conditioning. The key to our framework is a Fusion Block that enables bidirectional
information exchange between our backbone video and audio diffusion models through a temporally-aligned self attention operation. Unlike prior work that uses feature extractors pretrained for other tasks for the conditioning signal, AV-Link can directly leverage features obtained by the
complementary modality in a single framework i.e. video features to generate audio, or audio features to generate
video. We extensively evaluate our design choices and demonstrate the ability of our method to achieve synchronized and high-quality audiovisual content, showcasing its potential for applications in immersive media generation. For more details, please visit our <a href='https://snap-research.github.io/AVLink/'>project webpage</a> or read our 
<a href='#TODO'>paper</a>.
</div> 
<br>


# Issues
If you have any questions about AV-Link, please open an issue in this GitHub page or send your questions to `mh155@rice.edu`

# Project Page Template
a template of our project page can be found under `docs` directory

## Citation
If you find this paper useful in your research, please consider citing:
```
@misc{avlink,
      title={AV-Link: Temporally-Aligned Diffusion Features for Cross-Modal Audio-Video Generation}, 
      author={Moayed Haji-Ali and Willi Menapace and Aliaksandr Siarohin and Ivan Skorokhodov and Alper Canberk and Kwot Sin Lee and Vicente Ordonez and Sergey Tulyakov},
      year={2024},
      eprint={2412.15191},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2412.15191}, 
}
```
