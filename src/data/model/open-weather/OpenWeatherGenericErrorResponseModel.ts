export interface OpenWeatherGenericErrorResponseDTO {
  cod: number;
  message: string;
}

export interface OpenWeatherGenericErrorResponseModel {
  code: number;
  message: string;
}

export const OpenWeatherGenericErrorResponseMapper = {
  dtoToModel: (
    dto: OpenWeatherGenericErrorResponseDTO,
  ): OpenWeatherGenericErrorResponseModel => {
    return {
      code: dto.cod,
      message: dto.message,
    };
  },
};
